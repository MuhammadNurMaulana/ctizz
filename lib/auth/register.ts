"use server"

import bcrypt from "bcryptjs"
import { db } from "../db"


export const register = async (body: any) => {
  const { firstName, lastName, email, password } = body

  const hashPass = await bcrypt.hash(password, 10)

  const existUser = await db.user.findUnique({where: {email}})

  if (existUser) return { message: "User already exist" }

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashPass,
    },
  })

  return { message: "User created" }
}
