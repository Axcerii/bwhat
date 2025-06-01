import type { LayoutServerLoad } from "./$types";
import { verifyToken } from '$lib/server/jwt';

export const load: LayoutServerLoad = async ({ cookies }) => {
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

    return { user };
}