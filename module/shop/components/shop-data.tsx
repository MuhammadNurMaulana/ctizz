"use client"
import { GetApi } from "@/common/service/api/getApi"
import ShopCategories from "./shop-categories"
import ShopProduct from "./shop-data-product"
import { useEffect, useState } from "react"
import { Products } from "@/common/type/produt"
import { CiFilter } from "react-icons/ci"

export default function ShopData() {
  const [product, setProduct] = useState<Products[]>([])
  const [page, setPage] = useState(1)
  const [disabledPrev, setDisabledPrev] = useState()
  const [disabledNext, setDisabledNext] = useState()
  const [totalPage, setTotalPage] = useState()
  const [category, setCategory] = useState("")
  const [limit] = useState(12)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [iconFilter, setIconFilter] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const product = await GetApi(`/api/product?page=${page}&limit=${limit}`)

        setProduct(await product.data)
        setDisabledPrev(await product.prevPage)
        setDisabledNext(await product.nextPage)
        setTotalPage(await product.totalPage)
        window.scrollTo(0, 0)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    getData()
  }, [limit, page])

  useEffect(() => {
    const getData = async () => {
      const product = await GetApi(`/api/product?category=${category}&page=${page}&limit=${limit}`)

      setProduct(await product.data)
      setDisabledPrev(await product.prevPage)
      setDisabledNext(await product.nextPage)
      setTotalPage(await product.totalPage)
      window.scrollTo(0, 0)
    }
    getData()
  }, [category, limit, page])

  useEffect(() => {
    const filterByPrice = async () => {
      const product = await GetApi(`/api/product?minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&limit=${limit}`)
      setProduct(await product.data)
      setDisabledPrev(await product.prevPage)
      setDisabledNext(await product.nextPage)
      setTotalPage(await product.totalPage)
      window.scrollTo(0, 0)
    }

    filterByPrice()
  }, [limit, maxPrice, minPrice, page])

  const handleCategory = (category: string) => {
    setCategory(category)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  const handlePrev = () => {
    setPage(page - 1)
  }

  const handleIconFilter = () => {
    setIconFilter(!iconFilter)
  }
  return (
    <div className="lg:p-16">
      <div className="flex justify-between items-center">
        <h1>Shop &gt; AllProduct</h1>
        <button onClick={handleIconFilter} className="lg:hidden px-4">
          <CiFilter size={25} />
        </button>
      </div>
      <div className="grid relative lg:grid-cols-3 gap-8">
        <ShopCategories filterItems={handleCategory} minPrice={setMinPrice} maxPrice={setMaxPrice} setIconFilter={iconFilter} />
        <ShopProduct product={product} handleNext={handleNext} handlePrev={handlePrev} disabledNext={disabledNext} disabledPrev={disabledPrev} page={page} totalPage={totalPage} />
      </div>
    </div>
  )
}
