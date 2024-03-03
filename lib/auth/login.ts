"use server"

import { signIn } from "./auth"

export const login = async (body: { email: string; password: string }) => {
  const { email, password } = body

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  })
}
