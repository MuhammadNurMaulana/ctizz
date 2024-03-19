import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { Products } from "../type/produt"
interface CartItem extends Products {
  quantity: number
}

export interface CartStore {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  removeAllItem: () => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  totalPrice: () => number
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],

      addItem: (item: CartItem) => {
        const { cartItems } = get()
        const updatedCart = addToCart(cartItems, item)
        set({ cartItems: updatedCart })
      },

      removeItem: (id: string) => {
        const { cartItems } = get()
        const updatedCart = removeFromCart(cartItems, id)
        set({ cartItems: updatedCart })
      },

      removeAllItem: () => {
        set({ cartItems: [] })
      },

      totalPrice: () => {
        const { cartItems } = get()

        if (cartItems.length) return cartItems.map((item) => item.price * item.quantity).reduce((a, b) => a + b)

        return 0
      },

      incrementItem: (id: string) => {
        const { cartItems } = get()

        const updatedCart = incrementItemInCart(cartItems, id)

        set({ cartItems: updatedCart })
      },

      decrementItem: (id: string) => {
        const { cartItems } = get()

        const updatedCart = decrementItemInCart(cartItems, id)

        set({ cartItems: updatedCart })
      },
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
export default useCartStore

const addToCart = (cart: CartItem[], product: Products) => {
  const item = cart.find((item) => item.id === product.id)

  if (item) {
    return cart.map((item) => {
      if (item.id === product.id) {
        const itemQty = item.quantity >= 1 ? item.quantity : 1

        return { ...item, quantity: itemQty }
      }

      return item
    })
  }

  return [...cart, { ...product, quantity: 1 }]
}

const removeFromCart = (cart: CartItem[], id: string) => {
  const item = cart.find((item) => item.id === id)

  if (item) return cart.filter((item) => item.id !== id)

  return cart
}

const incrementItemInCart = (cart: CartItem[], id: string) => {
  const item = cart.find((item) => item.id === id)

  if (item) {
    return cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }

      return item
    })
  }

  return cart
}

const decrementItemInCart = (cart: CartItem[], id: String) => {
  const item = cart.find((item) => item.id === id)

  if (item) {
    return cart.map((item) => {
      if (item.id === id) {
        const itemQty = item.quantity > 1 ? item.quantity - 1 : 1

        return { ...item, quantity: itemQty }
      }

      return item
    })
  }

  return cart
}
