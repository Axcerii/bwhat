import { verifyToken } from '$lib/server/jwt';

import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma';

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get('session');
  
  if (token) {
    const decoded = verifyToken(token) as { id: number, email: string, role: string };
    if (decoded) {
      event.locals.user = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role
      };
    }
  }

  if (event.url.pathname.startsWith('/admin')) {
    console.log('A user tried to access an admin page');
    if (!token) {
      throw redirect(302, '/');
    }

    try {
      const decoded = verifyToken(token) as { id: number, email: string, role: string };
      
      if(!decoded) throw redirect(302, '/');

      const user = await prisma.user.findUnique({
        where: {
          id: decoded.id
        },
        select:{
          id: true,
          role: true
        }
      });
      
      if(!user) throw redirect(302, '/');
      

      if (user.role !== 'ADMIN') {
        console.log('A user tried to access an admin page');
        throw redirect(302, '/');
      }
      
      event.locals.user = decoded;
    } catch (err) {
      event.cookies.delete('token', { path: '/' });
      console.error(err);
      throw redirect(302, '/');
    }
  }
  
  return resolve(event);
};