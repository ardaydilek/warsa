import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      from: "noreply@ardakaan.dev",
    }),
  ],
  pages: {
    verifyRequest: "/auth/verify-request",
  },
});