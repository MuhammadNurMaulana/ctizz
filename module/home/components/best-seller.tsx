import { GetApi } from "@/common/service/api/getApi"
import { BestSeller } from "@/common/type/best-seller"
import Image from "next/image"
import Link from "next/link"

export default async function BestSeller() {
  const bestProduct = await GetApi(`${process.env.GET_FETCH_API}/api/bestSeller`)

  const formatPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })

  return (
    <div className="my-12 lg:my-28 md:w-[85%] mx-auto">
      <h1 className="mb-4 text-xl md:text-4xl font-mono font-semibold px-8 md:px-0">Produk Terlaris</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {bestProduct.data.map((item: BestSeller) => (
          <Link href={`/shop/${item.id}`} key={item.id}>
            <Image src={item.image} alt={item.title} width={600} height={600} className="h-[200px] object-contain object-center w-full" />
            <div className="grid gap-3 p-4">
              <h1 className="truncate font-serif font-semibold text-xs md:text-lg">{item.title}</h1>
              <div className="flex items-center gap-4">
                <h1 className="p-1 border-neutral-600 border rounded text-[8px] md:text-xs">Product Terlaris</h1>
                <h1 className="text-[8px] md:text-xs">⭐ {item.rating.stars}</h1>
              </div>
              <p className="text-[8px] md:text-[10px] font-semibold">{item.sold} Terjual</p>

              <div className="flex items-center gap-4">
                <p className="font-semibold text-[10px] md:text-sm">{formatPrice.format(item.price)}</p>
                <p className=" font-semibold text-[8px] md:text-xs">{item.discount}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
