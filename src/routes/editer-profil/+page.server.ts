import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, fail, redirect, type Actions, type Cookies } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/jwt';
import bcrypt from 'bcrypt';
import { isValidEmail } from '$lib/server/regexValidation';

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

        return {user:userWithRelations};
    }
    catch(err){
        console.error(err);
        throw error(500, 'Une erreur est survenue');
    }
}

export const actions: Actions ={
  default: async ({ request, cookies }:{ request: Request, cookies: Cookies}) => {

    if(!cookies.get('session')) throw redirect(303, '/se-connecter');

    const formData = await request.formData();
    const name = formData.get('firstname')?.toString() || '';
    const surname = formData.get('lastname')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    if (!isValidEmail(email)) return fail(400, { error: 'Email invalide' });

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
                password: true,
            }
        });

        if(!userWithRelations) throw redirect(303, '/');

        if(!await bcrypt.compare(password, userWithRelations.password)) return fail(400, { error: 'Mot de passe incorrect' });

        if(await prisma.user.findUnique({ where: { email: email} }) && email !== userWithRelations.email) return fail(400, { error: 'Cet email est deja utilisé' });



        await prisma.user.update({ 
            where: { id: user.id },
            data: {
                name: name,
                surname: surname,
                email: email,
            }
        });

    }
    catch(err){
        console.error(err);
        throw error(500, 'Une erreur est survenue');
    }
    
    throw redirect(303, '/mon-compte');
}
}