import NextAuth, { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import google from "next-auth/providers/google"
import { db } from "../db"
import { compare } from "bcryptjs"

const config = {
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
          const user = await db.user.findUnique({
            where: { email },
          })

          if (!user || !user.password) return null

          const comparePass = await compare(password, user.password)

          if (comparePass) return user
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(config)
