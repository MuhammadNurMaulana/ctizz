import { NextRequest, NextResponse } from "next/server"
import bestSeller from "@/common/service/json/bestSeller.json"

export const GET = (req: NextRequest) => {
  const { searchParams } = new URL(req.url)

  const id = searchParams.get("id")

  if (id) {
    const data = bestSeller.find((item) => item.id === id)

    if (data) return NextResponse.json({ message: "200", data })

    return NextResponse.json({ message: "404" })
  }

  const data = bestSeller
  return NextResponse.json({ message: "200", data })
}
