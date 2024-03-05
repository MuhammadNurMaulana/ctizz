"use client"
import Input from "@/components/form-components/input"
import Label from "@/components/form-components/label"
import { register } from "@/lib/auth/register"
import Link from "next/link"
import React, { FormEvent, useState } from "react"

export default function FormRegister() {
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    if (
      formData.get("email") == null ||
      formData.get("email") == "" ||
      formData.get("firstName") == null ||
      formData.get("firstName") == "" ||
      formData.get("lastName") == null ||
      formData.get("lastName") == "" ||
      formData.get("password") == null ||
      formData.get("password") == ""
    ) {
      setError("Please fill in the form")
    } else {
      const body = {
        email: formData.get("email"),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        password: formData.get("password"),
      }

      const cek = register(body)

      cek.then((res) => setError(res.message))
    }
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

      {error && <p className="text-red-500 bg-neutral-300 p-3 text-center my-4 font-bold font-serif text-sm">{error}</p>}

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
