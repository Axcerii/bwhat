import { prisma } from '$lib/server/prisma';
import { error, fail, redirect, type Actions, type Cookies } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/jwt';
import { isValidPhoneNumber, isValidPostalCode } from '$lib/server/regexValidation';

export const actions: Actions ={
  default: async ({ request, cookies }:{ request: Request, cookies: Cookies}) => {

    if(!cookies.get('session')) throw redirect(303, '/se-connecter');

    const formData = await request.formData();
    const adresse = formData.get('adresse')?.toString() || '';
    const postal_code = formData.get('postal_code')?.toString() || '';
    const city = formData.get('city')?.toString() || '';
    const country = formData.get('country')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const complement = formData.get('complement')?.toString() || '';


    if(!adresse || !postal_code || !city || !country) return fail(400, { error: 'Veuillez remplir tous les champs' });
    if(phone && !isValidPhoneNumber(phone)) return fail(400, { error: 'Le numero de telephone est incorrect' });
    if(postal_code && !isValidPostalCode(postal_code)) return fail(400, { error: 'Le code postal est incorrect' });

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

    const userWithRelations = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
            id: true,
        }
    })

    if(!userWithRelations) throw redirect(303, '/se-connecter');

    try{
        await prisma.address.create({ 
            data: {
                userId: userWithRelations.id,
                street: adresse,
                city: city,
                postalCode: postal_code,
                phone: phone,
                country: country,
                complement: complement
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