import { Navbar } from "../navbar"
import DiscountSlideHome from "./components/discount-slide"
import ShopCategories from "./components/shop-by-categories"
import BestSeller from "./components/best-seller"
import DealsTimer from "./components/deals-timer"
import CustomerReviw from "./components/customer-review"
import InstagramStories from "./components/home-instagram"
import PageContainer from "@/components/layouts/page-contain"
import Shiping from "./components/shiping"

export default function HomeComponents() {
  return (
    <PageContainer>
      <DiscountSlideHome />
      <ShopCategories />
      <BestSeller />
      <DealsTimer />
      <CustomerReviw />
      <InstagramStories />
      <Shiping />
    </PageContainer>
  )
}
