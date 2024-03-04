import NextAuth, { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import google from "next-auth/providers/google"
import { compare } from "bcryptjs"
import { getUserByEmail } from "./getUserByEmail"
import github from "next-auth/providers/github"

const config = {
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    credentials({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        if (email && password) {
          const user = await getUserByEmail(email)

          if (!user || !user.password) return null

          const comparePass = await compare(password, user.password)

          if (comparePass) return user
        }

        return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.email = user.email
      }
      return token
    },

    async session({ session, token }: any) {
      if ("firstName" in token) session.firstName = token.firstName
      if ("lastName" in token) session.lastName = token.lastName
      if ("password" in token) session.password = token.password
      if ("email" in token) session.email = token.email
      return session
    },
  },

  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(config)
