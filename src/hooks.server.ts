import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';

import { PrismaClient } from '@prisma/client';
import { sequence } from '@sveltejs/kit/hooks';

export const prisma_client = new PrismaClient();

// adds prisma to all endpoints - by syntaxFM
export const prisma: Handle = async function ({ event, resolve }) {
  event.locals.prisma = prisma_client;
  const response = await resolve(event);
  return response;
};

// This is the SvelteKit middleware that will be used to handle the auth request with lucia
export const authHandle: Handle = async ({ event, resolve }) => {
  // we can pass `event` because we used the SvelteKit middleware
  event.locals.auth = auth.handleRequest(event);
  return await resolve(event);
};


export const handle: Handle = sequence(
  prisma,
  authHandle
);