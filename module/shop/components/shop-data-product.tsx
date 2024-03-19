import { setPriceToIdr } from "@/common/service/setPrice"
import { Products } from "@/common/type/produt"
import Image from "next/image"
import Link from "next/link"

interface ProductProps {
  product: Products[]
  handlePrev: () => void
  handleNext: () => void
  disabledPrev: undefined
  disabledNext: undefined
  page: number
  totalPage: undefined
}

export default function ShopProduct({ product, handleNext, handlePrev, disabledNext, disabledPrev, page, totalPage }: ProductProps) {
  return (
    <div className="col-span-2">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {!product && <p className="col-span-3">Produk tidak ditemukan</p>}
        {product &&
          product.map((item: Products) => (
            <Link key={item.id} href={`/shop/${item.id}`}>
              <Image src={item.image} alt={item.title} width={600} height={600} className="h-[200px] object-contain object-center w-full" />
              <div className="grid gap-3 p-4">
                <h1 className="truncate font-serif font-semibold text-xs md:text-lg">{item.title}</h1>
                <div className="flex items-center gap-4">
                  <p className="text-[8px] md:text-[10px] font-semibold">{item.sold} Terjual</p>
                  <p> / </p>
                  <h1 className="text-[8px] md:text-xs">⭐ {item.rating.stars}</h1>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-semibold text-[10px] md:text-sm">{setPriceToIdr(item.price)}</p>
                  <p className=" font-semibold text-[8px] md:text-xs">{item.discount}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {product && (
        <div className="flex items-center gap-3 justify-end my-12 p-4">
          <button onClick={handlePrev} disabled={disabledPrev === null} className={`${disabledPrev ? "text-neutral-700" : " text-neutral-400"}  font-semibold font-serif text-lg `}>
            Previous
          </button>
          <h1>{page} / </h1>
          <h1>{totalPage}</h1>
          <button onClick={handleNext} disabled={disabledNext === null} className={`${disabledNext ? "text-neutral-700" : " text-neutral-400"}  font-semibold font-serif text-lg`}>
            Next
          </button>
        </div>
      )}
    </div>
  )
}
