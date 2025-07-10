import { prisma } from '$lib/server/prisma';
import { error, fail, redirect, type Actions, type Cookies } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/jwt';
import { isValidPhoneNumber, isValidPostalCode, isValidPlainText } from '$lib/server/regexValidation';

export const actions: Actions ={
/**
 * Handles the address addition process for a user.
 * 
 * This function processes a POST request to add a new address for the authenticated user.
 * It expects the following fields in the request form data: 'adresse', 'postal_code', 'city',
 * 'country', 'phone', and 'complement'. Validates the presence and correctness of the required
 * fields ('adresse', 'postal_code', 'city', and 'country') and optionally validates the phone
 * number if provided. If validation fails, it returns an appropriate error message.
 * 
 * The user is authenticated via a session cookie, and their identity is verified using a JWT.
 * If the user is not authenticated, they are redirected to the login page.
 * 
 * Upon successful validation, the address is stored in the database linked to the user's ID.
 * Any database errors result in a server error response.
 * 
 * Finally, upon successful address creation, the user is redirected to their account page.
 * 
 * 
 * @throws Redirects to the login page if the user is not authenticated or if any required information is missing.
 * @throws Returns a 400 error with a message if validation fails.
 * @throws Returns a 500 error if a database error occurs.
 * 
 * @param request - The incoming HTTP request containing form data:
 *   - 'adresse' (string): The street name and number.
 *   - 'postal_code' (string): The postal code.
 *   - 'city' (string): The city name.
 *   - 'country' (string): The country name.
 *   - 'phone' (string): The phone number (optional).
 *   - 'complement' (string): Additional address information (optional).
 * 
 */

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
    if(!isValidPlainText(adresse)) return fail(400, { error: 'L\'adresse est incorrecte' });
    if(!isValidPlainText(city)) return fail(400, { error: 'La ville est incorrecte' });
    if(!isValidPlainText(country)) return fail(400, { error: 'Le pays est incorrect' });
    if(!isValidPlainText(complement)) return fail(400, { error: 'Le complement est incorrect' });
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