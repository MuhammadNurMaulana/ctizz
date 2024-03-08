import Footer from "@/module/footer"
import { Navbar } from "@/module/navbar"

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  )
}
