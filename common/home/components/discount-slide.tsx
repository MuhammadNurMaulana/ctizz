"use client"
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function DiscountSlideHome() {
  return (
    <div className="md:w-[70%] mx-auto rounded-3xl">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide>
          <Link href={"/"}>
            <Image src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-friday-postcard-template-design-a2b842816f03c6078a10da44e3bdfc52_screen.jpg?ts=1668497661"} alt="poster 1" width={2000} height={2000} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            <Image src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-friday-postcard-template-design-81213c9be487b31d2aed60bfc7280ca6_screen.jpg?ts=1668507407"} alt="poster 2" width={2000} height={2000} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            <Image
              src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-friday%2C-black-friday-sale-template-design-e94bfe22ccb72ec62edeac69d0c82905_screen.jpg?ts=1668966993"}
              alt="poster 3"
              width={2000}
              height={2000}
              className=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            <Image src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-friday-design-template-a8cda56ceaa759ae57e960069cebcb49_screen.jpg?ts=1698304739"} alt="poster 3" width={2000} height={2000} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
