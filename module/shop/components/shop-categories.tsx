"use client"
import { FormEvent, useState } from "react"

interface ShopCategoriesProps {
  filterItems: (cat: string) => void
  minPrice: any
  maxPrice: any
  setIconFilter: boolean
}

export default function ShopCategories({ filterItems, minPrice, maxPrice, setIconFilter }: ShopCategoriesProps) {
  const [cat, setCat] = useState(false)
  const [filter, setFilter] = useState(false)

  const handleFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    minPrice(formData.get("min"))
    maxPrice(formData.get("max"))
  }

  const handleProductCategories = () => {
    setCat(!cat)
  }

  const handleFilterByPrice = () => {
    setFilter(!filter)
  }

  return (
    <div className={`${setIconFilter ? "w-[80%] absolute top-0 right-0 left-0 lg:block lg:static bg-white p-3 min-h-screen" : "hidden lg:block"}`}>
      <button className="flex items-center gap-2 mt-5 text-xl font-semibold " onClick={handleProductCategories}>
        Berdasarkan Kategori {cat ? <p>&darr;</p> : <p>&uarr;</p>}
      </button>

      {cat && (
        <div className="grid grid-cols-2 gap-2 my-3">
          {cats.map((item, idx) => (
            <button key={idx} className="w-full bg-neutral-200 p-2 rounded" onClick={() => filterItems(item.name.toLowerCase())}>
              {item.nama}
            </button>
          ))}
        </div>
      )}

      <button className="flex items-center gap-2 mt-3 text-xl font-semibold " onClick={handleFilterByPrice}>
        Batas Harga (Rp) {filter ? <p>&darr;</p> : <p>&uarr;</p>}
      </button>

      {filter && (
        <form onSubmit={handleFilter}>
          <div className="grid grid-cols-3 my-2 gap-3 max-w-max bg-neutral-200 p-2">
            <div className="flex items-center gap-2 max-w-max">
              <label htmlFor="min" className="text-sm font-serif">
                Min
              </label>
              <input type="text" id="min" name="min" className="w-full text-xs p-1 text-neutral-500" />
            </div>
            <p className="text-center">-</p>
            <div className="flex items-center gap-2 max-w-max">
              <label htmlFor="max" className="text-sm font-serif">
                Max
              </label>
              <input type="text" id="max" name="max" className="w-full text-xs p-1 text-neutral-500" />
            </div>
          </div>
          <button type="submit" className="bg-neutral-700 p-2 rounded my-2 text-sm font-semibold text-white">
            Filter by Price
          </button>
        </form>
      )}
    </div>
  )
}

const cats = [
  {
    nama: "Pria",
    name: "Men`s",
  },
  {
    nama: "Wanita",
    name: "Women",
  },
  {
    nama: "Anak Anak",
    name: "Kids",
  },
  {
    nama: "Mainan",
    name: "Toy",
  },
  {
    nama: "Tas",
    name: "Bag",
  },
  {
    nama: "Baju",
    name: "Tshirt",
  },
]
