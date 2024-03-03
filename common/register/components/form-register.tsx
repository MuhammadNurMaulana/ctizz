"use client"
import Input from "@/components/form-components/input"
import Label from "@/components/form-components/label"
import { register } from "@/lib/auth/register"
import Link from "next/link"
import React, { FormEvent } from "react"

export default function FormRegister() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      password: formData.get("password"),
    }

    const cek = register(body)

    console.log(cek.then((res) => console.log(res.message)))
  }
  return (
    <form className="mt-4 p-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label label="First Name" name="firstName" />
        <Input placeholder="Enter your firstName" type="text" name="firstName" />
      </div>
      <div className="grid gap-2 mt-2">
        <Label label="Last Name" name="lastName" />
        <Input placeholder="Enter your lastName" type="text" name="lastName" />
      </div>

      <div className="grid gap-2 mt-2">
        <Label label="Email Address" name="email" />
        <Input placeholder="Enter your email" type="email" name="email" />
      </div>

      <div className="grid gap-2 mt-2">
        <Label label="Password" name="password" />
        <Input placeholder="Enter your password" type="password" name="password" />
      </div>

      <button type="submit" className="w-full p-3 my-4 text-bold font-serif bg-neutral-700 rounded hover:bg-neutral-800 text-white">
        Register
      </button>
      <p className="text-sm">
        You have an account?{" "}
        <Link href={"/auth/login"} className="font-bold">
          Login
        </Link>
      </p>
    </form>
  )
}
