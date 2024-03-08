import { BsBoxSeam } from "react-icons/bs"
import { BiMoneyWithdraw } from "react-icons/bi"
import { MdOutlineHeadphones } from "react-icons/md"
import { CiCreditCard1 } from "react-icons/ci"

export default function Shiping() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[85%] mx-auto my-16">
      <div className="flex flex-col gap-2">
        <BsBoxSeam size={30} />
        <h1 className="font-semibold text-lg">Free Shipping</h1>
        <p className="text-sm">Free shipping for order above Rp.1.000.000,00</p>
      </div>
      <div className="flex flex-col gap-2">
        <BiMoneyWithdraw size={30} />
        <h1 className="font-semibold text-lg">Money Guarantee</h1>
        <p className="text-sm">Within 30 days for an exchange</p>
      </div>
      <div className="flex flex-col gap-2">
        <MdOutlineHeadphones size={30} />
        <h1 className="font-semibold text-lg">Online Support</h1>
        <p className="text-sm">24 hours a day, 7 days a week</p>
      </div>
      <div className="flex flex-col gap-2">
        <CiCreditCard1 size={30} />
        <h1 className="font-semibold text-lg">Flexible Payment</h1>
        <p className="text-sm">Pay with multiple credit cards</p>
      </div>
    </div>
  )
}
