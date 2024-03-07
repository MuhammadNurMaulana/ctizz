import { auth } from "@/lib/auth/auth"
import { Navbar } from "../navbar"
import DiscountSlideHome from "./components/discount-slide"
import ShopCategories from "./components/shop-by-categories"

export default async function HomeComponents() {
  const session = await auth()
  console.log(session?.user)
  return (
    <div className="w-full">
      <Navbar />

      <DiscountSlideHome />
      <ShopCategories />

      <h1>hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, reprehenderit!</h1>
    </div>
  )
}
