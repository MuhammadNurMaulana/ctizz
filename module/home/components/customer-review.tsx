"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import reviewCustomer from "@/common/service/json/reviewCustomer.json"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function CustomerReviw() {
  return (
    <div className="w-[85%] mx-auto my-16">
      <h1 className="mb-4 text-xl md:text-4xl font-mono font-semibold">Ulasan Pengguna</h1>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
      >
        {reviewCustomer.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={`grid gap-3 py-8 ${playfair.className}`}>
              <h1 className="text-lg">⭐⭐⭐⭐⭐</h1>
              <h2 className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque ullam necessitatibus beatae nam? Est repudiandae, ipsam nostrum accusantium, esse dicta magni assumenda ex magnam tenetur autem non culpa ad.
              </h2>
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={100} height={100} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h1 className="text-sm font-semibold">{item.name}</h1>
                  <p className="text-xs text-neutral-500">{item.job}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
