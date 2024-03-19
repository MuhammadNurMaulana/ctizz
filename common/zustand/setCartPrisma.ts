"use server"
import { db } from "@/lib/db"

export const setCartPrisma = async (id: string, title: string, price: number, image: string, quantity: number) => {
  await db.cartItem.create({
    data: {
      itemId: id,
      title,
      price,
      image,
      quantity,
    },
  })
}
