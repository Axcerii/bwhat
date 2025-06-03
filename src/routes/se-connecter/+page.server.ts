import type { Actions } from './$types';
import { fail, redirect, type Cookies } from '@sveltejs/kit';
import { isValidEmail } from '$lib/server/regexValidation';
import { prisma } from '$lib/server/prisma';
import { generateToken } from '$lib/server/jwt';
import bcrypt from 'bcrypt';

export const actions = {
  default: async ({ request, cookies }:{ request: Request, cookies: Cookies}) => {
    const formData = await request.formData();
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    if (!isValidEmail(email)) return fail(400, { error: 'Le login de connexion doit être un mail' });

    const user = await prisma.user.findUnique({ 
      where: { email: email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true
      } 
    });

    if(!user) return fail(400, { error: 'Email ou mot de passe incorrect' });

    if(!await bcrypt.compare(password, user.password)) return fail(400, { error: 'Email ou mot de passe incorrect' });
    
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    cookies.set('session', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
    
    throw redirect(303, '/mon-compte');
  }
} satisfies Actions;