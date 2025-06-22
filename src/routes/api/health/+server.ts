import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
	try {
		// Vérifie la connexion à la BDD via un simple ping
		await prisma.$queryRaw`SELECT 1`;

		return json({
			status: 'ok',
			database: 'connected'
		});
	} catch (err) {
		console.error('Health check failed:', err);

		return new Response(
			JSON.stringify({
				status: 'error',
				database: 'disconnected'
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}