"use client"
import useCartStore from "@/common/zustand/cart"

export default function AddToCart({ children, items }: { children: React.ReactNode; items: any }) {
  const { addItem: addToCart } = useCartStore()

  const handleAddToCart = () => {
    addToCart(items)
  }

  return (
    <button className="w-full bg-blue-700 text-white font-bold px-2 py-1 mb-4 rounded-sm" onClick={handleAddToCart}>
      {children}
    </button>
  )
}
