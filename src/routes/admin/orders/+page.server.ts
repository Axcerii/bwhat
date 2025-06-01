import { prisma } from '$lib/server/prisma';
import type { PageServerLoad, Actions } from './$types';
import { error, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') ?? '1');
  const limit = 50;
  const offset = (page - 1) * limit;

  try {
    const [orders, totalCount] = await Promise.all([
      prisma.order.findMany({
        include: {
          user: {
            select: {
              email: true,
              name: true,
              surname: true
            }
          },
          box: {
            select: {
              name: true
            }
          },
          address: {
            select: {
              street: true,
              city: true,
              postalCode: true
            }
          }
        },
        orderBy: [
          { status: 'asc' },
          { orderedAt: 'desc' }
        ],
        skip: offset,
        take: limit
      }),
      prisma.order.count()
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      orders,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  } catch (err) {
    console.error('Erreur lors du chargement des commandes:', err);
    throw error(500, 'Erreur lors du chargement des commandes');
  }
};

export const actions: Actions = {
  updateOrder: async ({ request }) => {
    const formData = await request.formData();
    const orderId = parseInt(formData.get('orderId') as string);
    const field = formData.get('field') as string;
    const value = formData.get('value') as string;

    if (!orderId || !field || value === null) {
      return fail(400, { error: 'Données manquantes' });
    }

    try {
      const updateData: Record<string, string|number> = {};
      
      // Gérer les différents types de champs
      switch (field) {
        case 'status':
          updateData[field] = value;
          break;
        case 'price':
          updateData[field] = parseFloat(value);
          break;
        case 'userId':
        case 'boxId':
        case 'addressId':
          updateData[field] = parseInt(value);
          break;
        default:
          return fail(400, { error: 'Champ non autorisé' });
      }

      await prisma.order.update({
        where: { id: orderId },
        data: updateData
      });

      return { success: true };
    } catch (err) {
      console.error('Erreur lors de la mise à jour:', err);
      return fail(500, { error: 'Erreur lors de la mise à jour' });
    }
  }
};