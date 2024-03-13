import { GetApi } from "@/common/service/api/getApi"
import PageContainer from "@/components/layouts/page-contain"
import DataCek from "@/module/shop/components/data-cek"
import DataInformasi from "@/module/shop/components/data-informasi"
import DataProductDetails from "@/module/shop/components/data-product"
import ProductNotFound from "@/module/shop/components/product-not-found"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default async function ShopDetails({ params }: any) {
  // const { id } = params

  // const products = await GetApi(`http://localhost:3000/api/product?id=${id}`)

  // const randomProductsData = await GetApi("http://localhost:3000/api/product")
  // const numberOfProducts = randomProductsData.data.length

  // const randomIndices: any = []
  // while (randomIndices.length < 3) {
  //   const randomIndex = Math.floor(Math.random() * numberOfProducts)
  //   if (!randomIndices.includes(randomIndex)) {
  //     randomIndices.push(randomIndex)
  //   }
  // }

  // const randomProduct = randomIndices.map((index: number) => randomProductsData.data[index])

  // const product = await products.data

  return (
    <PageContainer>
      <h1>test</h1>
      {/* <ProductNotFound product={product} />
      <DataProductDetails product={product} randomProduct={randomProduct} />
      <DataInformasi />
      {product && <DataCek stars={product[0].rating.stars} count={product[0].rating.count} />} */}
    </PageContainer>
  )
}
