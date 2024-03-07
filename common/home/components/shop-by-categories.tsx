"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import Link from "next/link"
import Image from "next/image"

export default function MySwiperComponent() {
  return (
    <div className="my-28 w-[85%] mx-auto">
      <h1 className="mb-4 text-xl md:text-4xl font-mono font-semibold">Shop By Categories</h1>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination, Navigation]}
        slidesPerView={window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 2 : 4}
      >
        {dataCat.map((item, idx) => (
          <SwiperSlide key={idx} style={{ position: "relative" }}>
            <Link href={item.link}>
              <Image src={item.image} alt={item.title} width={700} height={700} />
              <h1 className="absolute bottom-6 left-5 px-5 py-1 rounded-[5px] bg-white text-neutral-700 font-bold font-serif md:text-2xl">{item.title}</h1>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const dataCat = [
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casual Wear",
    link: "/",
  },
  {
    image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Jackets & Coats",
    link: "/",
  },
  {
    image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casual Wear",
    link: "/",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casual Wear",
    link: "/",
  },
  {
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casual Wear",
    link: "/",
  },
  {
    image: "https://images.unsplash.com/photo-1634469875582-a0885fc2f589?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casual Wear",
    link: "/",
  },
]
