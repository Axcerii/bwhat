import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, redirect, type Cookies } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/jwt';

export const load: PageServerLoad = async({cookies}: {cookies : Cookies}) => {
    if(!cookies.get('session')) throw redirect(303, '/se-connecter');

    const jwt = cookies.get('session');
    let user = null;

    if(jwt){
        try{
            user = verifyToken(jwt);
        }
        catch (err){
            console.error(err);
        }
    }

    if(!user) throw redirect(303, '/se-connecter');
    if(typeof user !== 'object' || !user.id) throw redirect(303, '/se-connecter');

    try{
        const userWithRelations = await prisma.user.findUnique({ 
            where: { id: user.id },
            select: {
                id: true,
                email: true,
                role: true,
                name: true,
                surname: true,
            }
        });

        if(!userWithRelations) throw redirect(303, '/');

        const addresses = await prisma.address.findMany({where: {userId: user.id}});
        const subscriptions = await prisma.subscription.findMany({
            where: {userId: user.id},
            include: {
                box: true,
                address: true
            }
        });

        return {user:userWithRelations, addresses, subscriptions};
    }
    catch(err){
        console.error(err);
        throw error(500, 'Une erreur est survenue');
    }

}