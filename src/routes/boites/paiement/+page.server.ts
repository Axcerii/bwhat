import type { Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/jwt';
import { prisma } from '$lib/server/prisma';

export const actions: Actions = {
  default: async ({ request, cookies, url }) => {
    // Vérification du token
    const jwt = cookies.get('session');
    if (!jwt) throw redirect(303, '/se-connecter');

    let tokenData = null;

    try {
      tokenData = verifyToken(jwt);
    } catch (err) {
      console.error('Token invalide :', err);
      throw redirect(303, '/se-connecter');
    }

    if (!tokenData) {
      throw redirect(303, '/se-connecter');
    }

    if (typeof tokenData !== 'object' || !tokenData.id) {
      throw redirect(303, '/se-connecter');
    }

    const userId = tokenData.id;

    // Récupération de l'utilisateur AVANT le try/catch
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        addresses: true
      }
    });

    if (!user) {
      throw redirect(302, '/se-connecter');
    }

    // Vérification nom et prénom
    if (!user.name || !user.surname) {
      const errorMessage = "Veuillez compléter votre nom et prénom dans vos informations personnelles.";
      throw redirect(302, `/mon-compte?error=${encodeURIComponent(errorMessage)}`);
    }

    // Vérification qu'il y a au moins une adresse
    if (!user.addresses || user.addresses.length === 0) {
      const errorMessage = "Veuillez ajouter au moins une adresse dans vos informations personnelles.";
      throw redirect(302, `/mon-compte?error=${encodeURIComponent(errorMessage)}`);
    }

    // Traitement des données dans le try/catch
    try {
      const data = await request.formData();
      const abonnement = data.get('Abonnement') as string;
      const price = data.get('Price') as string;
      const boiteId = data.get('BoiteId') as string;

      // Si tout est OK, redirection vers la page de paiement avec les paramètres
      const paymentUrl = new URL('/boites/paiement', url.origin);
      paymentUrl.searchParams.set('abonnement', abonnement);
      paymentUrl.searchParams.set('price', price);
      paymentUrl.searchParams.set('boiteId', boiteId);

      throw redirect(302, paymentUrl.toString());
    } catch (error) {
      console.error('Erreur lors du traitement de l\'abonnement :', error);
      return fail(500, {
        error: 'Une erreur est survenue lors du traitement de votre demande.'
      });
    }
  }
};
