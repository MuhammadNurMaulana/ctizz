import { Playfair_Display } from "next/font/google"
import DetailsDeskripsi from "./shop-details-deskripsi"
import Image from "next/image"
import { Products } from "@/common/type/produt"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function DataProductDetails({ product, randomProduct }: { product: any; randomProduct: Products[] }) {
  const setPriceToIdr = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price)
  }

  const productStars = (stars: number) => {
    if (stars === 5) {
      return "⭐⭐⭐⭐⭐"
    } else if (stars < 5) {
      return "⭐⭐⭐⭐"
    } else if (stars < 4) {
      return "⭐⭐⭐"
    } else if (stars < 3) {
      return "⭐⭐"
    } else stars < 2
    return "⭐"
  }
  return (
    <>
      {product && (
        <div className="p-4 md:p-8 lg:p-16">
          <h1 className="font-semibold">Home / Shop / {product[0].title}</h1>
          <div className={`grid lg:grid-cols-2 my-8 ${playfair.className}`}>
            <Image src={product[0].image} alt={product[0].title} width={800} height={800} className="h-[400px] object-contain object-center w-full" />
            <div className="flex flex-col flex-wrap gap-2">
              <h1 className={`text-2xl font-bold`}>{product[0].title}</h1>
              <p className="text-neutral-600">Lorem ipsum dolor sit amet.</p>
              <h2 className="font-bold text-s font-sans text-neutral-400">
                {productStars(product[0].rating.stars)} ({product[0].rating.stars}) / {product[0].rating.count} Review
              </h2>
              <div className="flex items-center gap-3">
                <h2 className="font-sans font-semibold text-lg text-neutral-600">{setPriceToIdr(product[0].price)}</h2>
                <h2 className="text-neutral-500 font-semibold">{product[0].discount}</h2>
              </div>
              <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor deleniti possimus qui optio voluptas est praesentium at, numquam quis magnam aliquam earum doloremque placeat quos quae ab voluptatibus, dolorum delectus.
              </p>
            </div>
          </div>

          <DetailsDeskripsi stok={product[0].rating.count - 50} />
          <div>
            <h1 className="my-10 text-xl font-semibold">Produk yang mungkin kamu suka</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {randomProduct.map((item: Products) => (
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
          </div>
        </div>
      )}
    </>
  )
}
