import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
  pages: {
    signIn: "/auth",
  },
};

export default NextAuth(authOptions);
