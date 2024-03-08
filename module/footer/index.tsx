import { Playfair_Display } from "next/font/google"
import { FiPhoneCall } from "react-icons/fi"
import { MdOutlineMail } from "react-icons/md"
import { LuMapPin } from "react-icons/lu"
import Link from "next/link"
import { BiArrowToLeft } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Footer() {
  return (
    <footer className="p-12 bg-neutral-800 text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8">
        <div className="col-span-2 md:col-span-3 items-center lg:items-start  lg:col-span-1 flex flex-col gap-3">
          <h1 className={`${playfair.className} text-3xl font-semibold`}>Ctizz</h1>
          <a href="https://wa.me/6283137446693" target="_blank" className="flex items-center gap-2">
            <FiPhoneCall size={20} />
            <h1 className="text-xs font-semibold font-serif">+62 831-3744-6693</h1>
          </a>
          <a href="mailto:maulanavzr@gmail" target="_blank" className="flex items-center gap-2 flex-wrap">
            <MdOutlineMail size={20} className="text-white" />
            <h1 className="text-xs font-semibold font-serif">maulanavzr@gmail.com</h1>
          </a>
          <div className="flex items-center gap-2">
            <LuMapPin size={20} />
            <h1 className="text-xs font-semibold font-serif">Jakarta, Indonesia</h1>
          </div>
        </div>
        <div className="grid justify-center gap-2">
          <h1 className="font-bold text-lg">Information</h1>
          {information.map((item, idx) => (
            <Link href={item.href} key={idx} className="max-w-max text-sm font-semibold">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="grid justify-center gap-2">
          <h1 className="font-bold text-lg">Service</h1>
          {service.map((item, idx) => (
            <Link href={item.href} key={idx} className="max-w-max text-sm font-semibold">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-2 grid gap-2">
          <h1 className="font-bold text-lg">Subscribe</h1>
          <p>Enter your email below to be the first to know about new collections and product launches</p>
          <Link href={"/"} className="border border-white p-2 rounded-[8px] flex items-center gap-2 justify-between w-full  lg:w-1/2">
            <div className="flex items-center gap-2">
              <MdOutlineMail size={20} />
              <h1>Your Email</h1>
            </div>
            <BsArrowRight size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

const information = [
  {
    name: "My Account",
    href: "/",
  },
  {
    name: "Login",
    href: "/auth/login",
  },
  {
    name: "My Cart",
    href: "/",
  },
  {
    name: "My Wishlist",
    href: "/",
  },
  {
    name: "Checkout",
    href: "/",
  },
]

const service = [
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Careers",
    href: "/auth/login",
  },
  {
    name: "Delivery Information",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/",
  },
  {
    name: "Terms & Conditions",
    href: "/",
  },
]
