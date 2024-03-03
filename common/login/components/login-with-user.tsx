"use client"
import Input from "@/components/form-components/input"
import Label from "@/components/form-components/label"
import { login } from "@/lib/auth/login"
import Link from "next/link"
import { FormEvent } from "react"

export default function LoginWithUser() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    }

    const res = login(body)
    console.log(res)
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
