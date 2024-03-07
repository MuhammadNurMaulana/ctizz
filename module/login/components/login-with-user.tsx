"use client"
import Input from "@/components/form-components/input"
import Label from "@/components/form-components/label"
import { login } from "@/lib/auth/login"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function LoginWithUser() {
  const [error, setError] = useState<string | undefined>("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    if (formData.get("email") == null || formData.get("email") == "" || formData.get("password") == null || formData.get("password") == "") {
      setError("Please fill in the form")
    } else {
      const body = {
        email: formData.get("email"),
        password: formData.get("password"),
      }

      try {
        await login(body)
      } catch (error) {
        setError("Email or password is incorrect")
      }
    }
  }
  return (
    <form className="mt-4 p-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label label="Email Address" name="email" />
        <Input placeholder="Enter your email" type="email" name="email" />
      </div>
      <div className="grid gap-2 mt-2">
        <Label label="Password" name="password" />
        <Input placeholder="Enter your password" type="password" name="password" />
      </div>

      {error && <p className="text-red-500 bg-neutral-300 p-3 text-center my-4 font-bold font-serif text-sm">{error}</p>}

      <button type="submit" className="w-full p-3 my-4 text-bold font-serif bg-neutral-700 rounded hover:bg-neutral-800 text-white">
        Login
      </button>
      <p className="text-sm">
        You have no`t an account?{" "}
        <Link href={"/auth/register"} className="font-bold">
          Register
        </Link>
      </p>
      <p className="my-4 text-center font-bold text-2xl">OR</p>
    </form>
  )
}
