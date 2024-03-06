"use client"
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function DiscountSlideHome() {
  return (
    <div className="w-full h-[90vh] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="w-[80%] grid gap-2">
                <h2 className={`text-xl md:text-3xl ${playfair.className} font-semibold`}>Classic Exclusive</h2>
                <h1 className={`text-2xl md:text-5xl ${playfair.className} font-bold`}>Women`s Collection</h1>
                <p>UPTO 40% OFF</p>
                <button className="bg-neutral-700 text-white font-serif text-sm px-4 py-1 max-w-max rounded">Shop Now </button>
              </div>
            </div>
            <Image
              src={
                "https://img.freepik.com/free-photo/portrait-young-stylish-laughing-model-black-casual-summer-clothes-cap-with-natural-makeup-white_158538-11834.jpg?t=st=1709694744~exp=1709698344~hmac=5160a6e222990dd7887cd9db4b4c425fa3457c95e7c155718086bd7a02b38613&w=740"
              }
              alt="test"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="w-[80%] grid gap-2">
                <h2 className={`text-xl md:text-3xl ${playfair.className} font-semibold`}>Classic Exclusive</h2>
                <h1 className={`text-2xl md:text-5xl ${playfair.className} font-bold`}>Women`s Collection</h1>
                <p>UPTO 40% OFF</p>
                <button className="bg-neutral-700 text-white font-serif text-sm px-4 py-1 max-w-max rounded">Shop Now </button>
              </div>
            </div>
            <Image
              src={
                "https://img.freepik.com/free-photo/portrait-young-stylish-laughing-model-black-casual-summer-clothes-cap-with-natural-makeup-white_158538-11834.jpg?t=st=1709694744~exp=1709698344~hmac=5160a6e222990dd7887cd9db4b4c425fa3457c95e7c155718086bd7a02b38613&w=740"
              }
              alt="test"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="w-[80%] grid gap-2">
                <h2 className={`text-xl md:text-3xl ${playfair.className} font-semibold`}>Classic Exclusive</h2>
                <h1 className={`text-2xl md:text-5xl ${playfair.className} font-bold`}>Women`s Collection</h1>
                <p>UPTO 40% OFF</p>
                <button className="bg-neutral-700 text-white font-serif text-sm px-4 py-1 max-w-max rounded">Shop Now </button>
              </div>
            </div>
            <Image
              src={
                "https://img.freepik.com/free-photo/portrait-young-stylish-laughing-model-black-casual-summer-clothes-cap-with-natural-makeup-white_158538-11834.jpg?t=st=1709694744~exp=1709698344~hmac=5160a6e222990dd7887cd9db4b4c425fa3457c95e7c155718086bd7a02b38613&w=740"
              }
              alt="test"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
