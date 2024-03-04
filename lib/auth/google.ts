"use server"

import { signIn } from "./auth"

export const google = async () => {
  await signIn("github", {
    redirectTo: "/",
  })
}
