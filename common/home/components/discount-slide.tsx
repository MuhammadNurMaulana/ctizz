"use client"
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function DiscountSlideHome() {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      style={{ width: "100%", height: "100%" }}
    >
      <SwiperSlide style={{ textAlign: "center", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-[#4B657A] rounded-[10px] overflow-hidden">
          <div className="grid justify-center items-center">
            <div className={`text-start ${playfair.className} text-white p-8 grid gap-2`}>
              <h1 className="text-2xl font-semibold">Casual Exclusive</h1>
              <h1 className="text-3xl font-bold">Women`s Casual</h1>
              <h1 className="font-semibold">UPTO 45% OFF</h1>
              <Link href={"/"} className="px-6 max-w-max py-1 bg-white text-neutral-800 rounded-[8px] text-sm font-mono font-semibold">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"https://img.freepik.com/free-photo/fashion-girl-dress-up-with-hand-gesture_1150-13808.jpg?t=st=1709791746~exp=1709795346~hmac=9a1788a9aa6635b086e30f63db50fe23d6c1dc84ef2d0a4196d873cc7a180d8b&w=360"}
              alt="sdasdsad"
              width={600}
              height={400}
              className="object-contain object-top w-full h-full block"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ textAlign: "center", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-[#858798] rounded-[10px] overflow-hidden">
          <div className="grid justify-center items-center">
            <div className={`text-start ${playfair.className} text-white p-8 grid gap-2`}>
              <h1 className="text-2xl font-semibold">Classic Exclusive</h1>
              <h1 className="text-3xl font-bold">Women`s Collection</h1>
              <h1 className="font-semibold">UPTO 40% OFF</h1>
              <Link href={"/"} className="px-6 max-w-max py-1 bg-white text-neutral-800 rounded-[8px] text-sm font-mono font-semibold">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"https://img.freepik.com/premium-photo/woman-black-blazer-plaid-skirt-stands-front-grey-background_841536-152.jpg?w=360"}
              alt="sdas"
              width={600}
              height={400}
              className="object-contain object-top w-full h-full block"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ textAlign: "center", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-[#0E0E0E] rounded-[10px] overflow-hidden">
          <div className="grid justify-center items-center">
            <div className={`text-start ${playfair.className} text-white p-8 grid gap-2`}>
              <h1 className="text-2xl font-semibold">Classic Exclusive</h1>
              <h1 className="text-3xl font-bold">Men`s Collection</h1>
              <h1 className="font-semibold">UPTO 70% OFF</h1>
              <Link href={"/"} className="px-6 max-w-max py-1 bg-white text-neutral-800 rounded-[8px] text-sm font-mono font-semibold">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"https://img.freepik.com/free-photo/close-up-handsome-man-posing_23-2148895180.jpg?t=st=1709793511~exp=1709797111~hmac=38ec9c07198c93661981482b4e9f2a014c8013919fa94e6486025fd7087e676e&w=360"}
              alt="sdas"
              width={600}
              height={400}
              className="object-contain object-top w-full h-full block"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ textAlign: "center", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-[#1F1B18] rounded-[10px] overflow-hidden">
          <div className="grid justify-center items-center">
            <div className={`text-start ${playfair.className} text-white p-8 grid gap-2`}>
              <h1 className="text-2xl font-semibold">Casual Exclusive</h1>
              <h1 className="text-3xl font-bold">Men`s Casual</h1>
              <h1 className="font-semibold">UPTO 60% OFF</h1>
              <Link href={"/"} className="px-6 max-w-max py-1 bg-white text-neutral-800 rounded-[8px] text-sm font-mono font-semibold">
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"https://img.freepik.com/free-photo/young-model-red-shirt-holding-eyeglasses_114579-17440.jpg?t=st=1709793624~exp=1709797224~hmac=31a2937a37005d8471e8b28ae106f3284c22c2446fc68fecc541137df3b68f81&w=360"}
              alt="sdas"
              width={600}
              height={400}
              className="object-contain object-top w-full h-full block"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
