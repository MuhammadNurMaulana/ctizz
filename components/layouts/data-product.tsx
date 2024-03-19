"use client"
import { RiDeleteBin6Line } from "react-icons/ri"
import { setPriceToIdr } from "@/common/service/setPrice"
import useCartStore, { CartStore } from "@/common/zustand/cart"
import useStore from "@/common/zustand/useStore"
import Image from "next/image"
import { FormEvent, useState } from "react"
import Link from "next/link"

export default function DataProduct() {
  const [discount, setDiscount] = useState<number>(0)

  const handleDiscount = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const discount = formData.get("discount")

    if (discount === "Maulana") {
      return setDiscount(5)
    } else {
      return setDiscount(0)
    }
  }
  const cartStore = useStore<CartStore, CartStore>(useCartStore, (state) => state)

  if (!cartStore) return <div></div>

  const { cartItems, incrementItem, decrementItem, removeItem, totalPrice } = cartStore

  const handleIncrementItem = (id: string) => (e: React.MouseEvent<any, MouseEvent>) => {
    incrementItem(id)
  }

  const handleDecrementItem = (id: string) => (e: React.MouseEvent<any, MouseEvent>) => {
    decrementItem(id)
  }

  const handleRemoveItem = (id: string) => (e: React.MouseEvent<any, MouseEvent>) => {
    removeItem(id)
  }

  return (
    <div className="lg:p-12 my-12">
      <h1 className="text-3xl font-semibold my-8 p-4">Keranjang ({cartItems.length})</h1>
      <div className="grid lg:grid-cols-3 gap-y-12 w-[90%] mx-auto">
        <div className="col-span-2">
          <div className="grid grid-cols-5 gap-4 text-center text-lg font-semibold">
            <h1 className="col-span-2">Produk</h1>
            <h1 className="hidden lg:block">Harga</h1>
            <h1 className="hidden lg:block">Jumlah</h1>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-2  lg:grid-cols-5 gap-4 my-3">
              <div className="flex gap-2 col-span-2 items-center">
                <Image src={item.image} alt={item.title} width={100} height={100} className="object-contain " />
                <h1 className="line-clamp-2 text-lg font-sans font-semibold">{item.title}</h1>
              </div>
              <h1 className="flex col-span-2 lg:col-span-1 items-center justify-center font-sans">{setPriceToIdr(item.price)}</h1>

              <div className="grid col-span-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
                <div className="flex items-center justify-center">
                  <div className="py-1 px-4 rounded-[10px] border-2 border-neutral-400 grid grid-cols-3 gap-1 w-full max-h-max ">
                    <button onClick={handleDecrementItem(item.id)} className=" text-center">
                      -
                    </button>
                    <h1 className="text-center">{item.quantity}</h1>
                    <button onClick={handleIncrementItem(item.id)} className="text-center">
                      +
                    </button>
                  </div>
                </div>
                <button onClick={handleRemoveItem(item.id)} className="flex items-center justify-center">
                  <RiDeleteBin6Line size={20} className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:gap-2 w-full">
          <div className="flex justify-between font-bold">
            <h1>Harga Seluruhnya</h1>
            <h1>{setPriceToIdr(totalPrice())}</h1>
          </div>

          <div>
            <h1 className="text-sm">Masukkan Kode Diskon Anda</h1>
            <form onSubmit={handleDiscount}>
              <input name="discount" type="text" placeholder="Masukkan Kode = 'Maulana' untuk mendapatkan diskon" className="border my-2 rounded-[8px] border-neutral-400 text-sm p-2 w-full" />
              <button type="submit" className="bg-neutral-600  text-sm text-white  py-1 px-4 rounded">
                Masukkan Kode
              </button>
            </form>
          </div>
          <h1 className="text-sm">Diskon : {discount}%</h1>

          <div className="flex justify-between font-bold">
            <h1>Harga Setelah Diskon</h1>
            <h1>{setPriceToIdr(totalPrice() - totalPrice() * (discount / 100))}</h1>
          </div>

          <Link href={"/checkout"} className=" bg-neutral-600  text-lg text-white rounded-[8px] py-2 text-center font-semibold">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}
