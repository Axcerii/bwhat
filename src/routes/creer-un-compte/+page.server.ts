import type { Actions } from './$types';
import { fail, redirect, type Cookies } from '@sveltejs/kit';
import { isValidEmail, isValidPassword } from '$lib/server/regexValidation';
import { prisma } from '$lib/server/prisma';
import { generateToken } from '$lib/server/jwt';
import bcrypt from 'bcrypt';

export const actions = {
  default: async ({ request, cookies }:{ request: Request, cookies: Cookies}) => {
    const formData = await request.formData();
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';
    const confirm = formData.get('confirmPassword')?.toString() || '';

    if (!isValidEmail(email)) return fail(400, { error: 'Email invalide' });
    if (!isValidPassword(password)) return fail(400, { error: 'Mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère special' });
    if (password !== confirm) return fail(400, { error: 'Les mots de passe ne correspondent pas' });

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return fail(400, { error: 'Cet email est déjà utilisé' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    });

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
    
    throw redirect(303, '/nos-produits');
  }
} satisfies Actions;