import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { prisma_client } from '../../hooks.server';


export const auth = lucia({
  adapter: prisma(prisma_client),
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),

  getUserAttributes: (data) => {
    return {
      username: data.username
    };
  }
});

export type Auth = typeof auth;