import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { randomUUID } from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "votre@email.com",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        const email = credentials.email.toLowerCase().trim();

        try {
          // Find or create user
          let user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user) {
            // Create user
            user = await prisma.user.create({
              data: {
                email,
                id: randomUUID(),
              },
            });

            // Create Stripe customer for new user
            try {
              const customer = await stripe.customers.create({
                email: user.email!,
                metadata: { userId: user.id },
              });

              await prisma.user.update({
                where: { id: user.id },
                data: { stripeCustomerId: customer.id },
              });
            } catch (error) {
              console.error("Error creating stripe customer", error);
            }
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;

        // Fetch the latest user data from the database
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id },
        });

        if (dbUser) {
          session.user.stripeCustomerId = dbUser.stripeCustomerId;
          session.user.isActive = !!dbUser.stripeSubscriptionId;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
