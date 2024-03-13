import NextAuth, { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import google from "next-auth/providers/google"
import { compare } from "bcryptjs"
import github from "next-auth/providers/github"
import { db } from "../db"

const config = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },

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
        const { email, password } = credentials as { email: string; password: string }

        if (email && password) {
          const user = await db.user.findUnique({ where: { email } })

          if (!user || !user.password) return null

          const isValid = await compare(password, user.password)
          if (isValid) return user

          return null
        }

        return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.image = user.image
        token.role = user.role
        token.name = user.name
      }

      return token
    },

    async session({ session, token }: any) {
      const user = await db.user.findUnique({ where: { id: token.id || { email: token.email } } })

      if (user) {
        session.user = {
          id: user.id,
          email: user.email,
          password: user.password,
          role: user?.role,
          name: user.name,
          image: user.image,
        }
      }

      return session
    },
  },

  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(config)
