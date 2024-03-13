"use server"

import bcrypt from "bcryptjs"
import { db } from "../db"

export const register = async (body: any) => {
  const { firstName, lastName, email, password, role, image } = body

  const name = firstName + " " + lastName

  const hashPass = await bcrypt.hash(password, 10)

  const existUser = await db.user.findUnique({ where: { email } })

  if (existUser) return { message: "User already exist" }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPass,
      role,
      image,
    },
  })

  return { message: "User created" }
}
