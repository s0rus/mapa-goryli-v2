import { trpc } from './../../../utils/trpc';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/db/client';
import { traceDeprecation } from 'process';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.username,
          ...profile,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
