import { db } from "@/lib/db"
import Image from "next/image"
import React from "react"

export default async function DataCek({ stars, count }: { stars: number; count: number }) {
  const reviews = await db.review.findMany()

  const review = reviews.map((review) => {
    return {
      ...review,
      createdAt: review.createdAt.toLocaleDateString("id-ID"),
    }
  })

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
    <div className="px-6 md:px-10 lg:px-18">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <h1 className="text-xl font-semibold">Penilaian Pelanggan</h1>
        <h1 className="text-sm">
          ⭐ {stars} dari {count} review{" "}
        </h1>
      </div>

      <div className="my-8 grid gap-4 h-80 overflow-y-auto">
        {review &&
          review.map((item: any) => (
            <div key={item.id} className="grid gap-2">
              <div className="flex items-center gap-2">
                <Image src={item.imageProfile} alt={item.name} width={100} height={100} className="w-10 h-10 rounded-full" />
                <div>
                  <h1 className="font-semibold text-sm">{item.nameProfile}</h1>
                  <p>{productStars(Number(item.rating))}</p>
                </div>
              </div>
              <h1 className="text-sm font-semibold">{item.name}</h1>
              <h1 className="text-sm">{item.review}</h1>
              <div className="flex flex-col md:flex-row text-sm font-semibold gap-1">
                <div className="flex items-center gap-1 flex-wrap">
                  <h1 className="text-neutral-400">Direview oleh</h1>
                  <h2>{item.email}</h2>
                </div>
                <div className="flex items-center gap-1">
                  <h1 className="text-neutral-400">Diunggah pada</h1>
                  <h2>{item.createdAt}</h2>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
