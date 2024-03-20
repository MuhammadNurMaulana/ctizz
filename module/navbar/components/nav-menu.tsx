"use client"
import useCartStore, { CartStore } from "@/common/zustand/cart"
import useStore from "@/common/zustand/useStore"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"
import { useState } from "react"
import { CiCircleChevUp, CiHeart, CiSearch } from "react-icons/ci"
import { IoBagHandleOutline } from "react-icons/io5"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function NavMenu({ children, navMenu }: { children: React.ReactNode; navMenu: any }) {
  const [menu, setMenu] = useState(false)

  const cartStore = useStore<CartStore, CartStore>(useCartStore, (state) => state)

  if (!cartStore) return <div></div>

  const { cartItems } = cartStore

  const handleMenu = () => {
    setMenu(!menu)
  }
  return (
    <div className="flex items-center justify-between lg:justify-start">
      <h1 className={`${playfair.className} text-3xl font-semibold lg:w-[30%]`}>Ctizz</h1>

      <div className={`transition-all duration-300 lg:flex lg:items-center gap-4 lg:justify-between lg:w-[70%] ${menu ? "absolute top-full right-0 left-0 bg-white px-4 lg:static " : "absolute -left-[200%] top-full lg:static"}`}>
        <ul className="lg:flex items-center gap-4 ">
          {navMenu.map((item: any, idx: number) => (
            <li key={idx} className="mt-2 lg:mt-0">
              <Link href={item?.href} className="font-serif ">
                {item?.titlle}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col lg:flex-row items-center gap-4 max-w-max mt-2 lg:mt-0">
          <div className="flex items-center gap-4">
            <button>
              <CiSearch size={25} />
            </button>
            <Link href={"/"}>
              <CiHeart size={25} />
            </Link>
            <Link href={"/checkout"} className="relative">
              {cartItems.length > 0 && (
                <div className="w-5 h-5 absolute  text-white flex items-center justify-center font-bold -top-3 -right-2  bg-red-600 rounded-full">
                  <h1 className="text-[11px]">{cartItems.length}</h1>
                </div>
              )}
              <IoBagHandleOutline size={22} />
            </Link>
          </div>
          {children}
        </div>
      </div>

      <button type="button" className={`${menu ? "transform rotate-180" : ""} lg:hidden`} onClick={handleMenu}>
        <CiCircleChevUp size={30} />
      </button>
    </div>
  )
}
