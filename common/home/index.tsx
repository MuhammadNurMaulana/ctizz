import { auth, signIn, signOut } from "@/lib/auth/auth"
import { Navbar } from "../navbar"
import Image from "next/image"
import DiscountSlideHome from "./components/discount-slide"

export default async function HomeComponents() {
  const session = await auth()
  console.log(session?.user)
  return (
    <div className="w-full">
      <Navbar />

      <DiscountSlideHome />

      <h1>hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, reprehenderit!</h1>
    </div>
  )
}
