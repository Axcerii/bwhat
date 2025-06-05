// src/routes/admin/subscriptions/+page.server.ts
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad, Actions } from './$types';
import { error, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') ?? '1');
  const limit = 50;
  const offset = (page - 1) * limit;

  try {
    const [subscriptions, totalCount] = await Promise.all([
      prisma.subscription.findMany({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
              surname: true
            }
          },
          box: {
            select: {
              id: true,
              name: true,
              price: true
            }
          },
          address: {
            select: {
              id: true,
              street: true,
              city: true,
              postalCode: true
            }
          }
        },
        orderBy: [
          { isActive: 'desc' },
          { startDate: 'desc' }
        ],
        skip: offset,
        take: limit
      }),
      prisma.subscription.count()
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      subscriptions,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  } catch (err) {
    console.error('Erreur lors du chargement des abonnements:', err);
    throw error(500, 'Erreur lors du chargement des abonnements');
  }
};

export const actions: Actions = {
  updateSubscription: async ({ request }) => {
    const formData = await request.formData();
    const subscriptionId = parseInt(formData.get('subscriptionId') as string);
    const field = formData.get('field') as string;
    const value = formData.get('value') as string;

    if (!subscriptionId || !field || value === null) {
      return fail(400, { error: 'Données manquantes' });
    }

    try {
      let updateData: any = {};
      
      // Gérer les différents types de champs
      switch (field) {
        case 'isActive':
          updateData[field] = value === 'true';
          break;
        case 'price':
          updateData[field] = parseFloat(value);
          break;
        case 'userId':
        case 'boxId':
        case 'addressId':
          updateData[field] = parseInt(value);
          break;
        case 'startDate':
        case 'endDate':
          updateData[field] = value ? new Date(value) : null;
          break;
        default:
          return fail(400, { error: 'Champ non autorisé' });
      }

      await prisma.subscription.update({
        where: { id: subscriptionId },
        data: updateData
      });

      return { success: true };
    } catch (err) {
      console.error('Erreur lors de la mise à jour:', err);
      return fail(500, { error: 'Erreur lors de la mise à jour' });
    }
  }
};