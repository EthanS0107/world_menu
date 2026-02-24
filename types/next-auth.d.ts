import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      stripeCustomerId?: string | null;
      isActive?: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
  }
}
