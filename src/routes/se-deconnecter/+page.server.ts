import { redirect, type Cookies } from '@sveltejs/kit';

export const load = async ({ cookies }: {cookies : Cookies}) => {
	// Supprimer le cookie de session
	cookies.delete('session', { path: '/' });

	// Redirection vers la page d'accueil ou de login
	throw redirect(303, '/se-connecter');
};