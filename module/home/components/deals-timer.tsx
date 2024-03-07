"use client"
import { Playfair_Display } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function DealsTimer() {
  const [totalSeconds, setTotalSeconds] = useState(120 * 24 * 60 * 60 + 18 * 60 * 60 + 15 * 60 + 10)

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (totalSeconds <= 0) {
      setTotalSeconds(120 * 24 * 60 * 60 + 18 * 60 * 60 + 15 * 60 + 10)
    }
  }, [totalSeconds])

  return (
    <div className="md:w-[85%] mx-auto rounded-3xl overflow-hidden">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className={`bg-[#DBEAF1] flex flex-col gap-4 p-12 ${playfair.className}`}>
          <h1 className="font-semibold md:text-3xl">Promo Bulan Ini</h1>
          <p className="text-neutral-950 font-semibold text-sm">
            It is long established fact that a reader will be disctracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
          </p>
          <h1 className="text-3xl font-bold">{formatTime(totalSeconds)}</h1>
          <Link href={"/"} className=" bg-neutral-800 p-2 rounded text-white text-xs font-semibold max-w-max">
            Lihat semua produk
          </Link>
        </div>
        <Image
          src={"https://img.freepik.com/free-photo/portrait-pretty-young-girl-model-posing-posing_144627-58305.jpg?t=st=1709798156~exp=1709801756~hmac=0ce6d85100d23320a5b62eeebb1d9572b7745b3ffac128f3fbdd9f60e747e4a3&w=740"}
          alt="Deals Image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}

const formatTime = (totalSeconds: number) => {
  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`
}
