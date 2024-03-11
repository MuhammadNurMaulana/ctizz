import product1 from "@/common/service/json/page1.json"
import product2 from "@/common/service/json/page2.json"
import product3 from "@/common/service/json/page3.json"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  const limit = parseInt(req.nextUrl.searchParams.get("limit") ?? "10")
  const page = parseInt(req.nextUrl.searchParams.get("page") ?? "1")
  const start = (page - 1) * limit
  const end = page * limit
  const category = req.nextUrl.searchParams.get("category")
  const minPrice = req.nextUrl.searchParams.get("minPrice")
  const maxPrice = req.nextUrl.searchParams.get("maxPrice")

  const allProduct = [...product1, ...product2, ...product3]

  if (minPrice && maxPrice) {
    const filteredProducts = allProduct.filter((item) => item.price >= Number(minPrice) && item.price <= Number(maxPrice))

    const totalProducts = filteredProducts.length

    const totalPage = Math.ceil(totalProducts / limit)

    if (page < 1 || page > totalPage) {
      return NextResponse.json({ message: "404", error: "Page not found" })
    }

    const data = filteredProducts.slice(start, end)

    let prevPage = null
    if (page > 1) {
      prevPage = page - 1
    }

    let nextPage = null
    if (page < totalPage) {
      nextPage = page + 1
    }

    return NextResponse.json({ message: "200", data, totalPage, prevPage, nextPage })
  }

  if (category) {
    const filteredProducts = allProduct.filter((item) => item.categories.some((cat) => cat.name.toLowerCase() === category.toLowerCase()))
    const totalProducts = filteredProducts.length

    const totalPage = Math.ceil(totalProducts / limit)

    if (page < 1 || page > totalPage) {
      return NextResponse.json({ message: "404", error: "Page not found" })
    }

    const data = filteredProducts.slice(start, end)

    let prevPage = null
    if (page > 1) {
      prevPage = page - 1
    }

    let nextPage = null
    if (page < totalPage) {
      nextPage = page + 1
    }

    return NextResponse.json({ message: "200", data, totalPage, prevPage, nextPage })
  }

  const totalProducts = allProduct.length
  const totalPage = Math.ceil(totalProducts / limit)

  if (page < 1 || page > totalPage) {
    return NextResponse.json({ message: "404", error: "Page not found" })
  }

  const data = allProduct.slice(start, end)

  let prevPage = null
  if (page > 1) {
    prevPage = page - 1
  }

  let nextPage = null
  if (page < totalPage) {
    nextPage = page + 1
  }

  return NextResponse.json({ message: "200", data, totalPage, prevPage, nextPage })
}
