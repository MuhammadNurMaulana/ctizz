import { auth } from "@/lib/auth/auth"
import DataReviews from "./data-review"
import Link from "next/link"

export default async function DataInformasi() {
  const session = await auth()

  return (
    <div>
      {!session && (
        <div className="p-16 my-8">
          <h1 className="text-xl font-semibold my-8">Tambah review yang kamu berikan</h1>
          <h1 className="font-semibold my-2">Anda belum login , untuk memberikan review anda harus login terlebih dahulu</h1>
          <Link href={"/auth/login"} className="text-white bg-neutral-700 p-2 px-4 my-4 rounded-[8px] text-sm font-semibold">
            Login
          </Link>
        </div>
      )}
      {session && session.user && <DataReviews custId={session.user.id} imageProfile={session.user.image} emailProfile={session.user.email} nameProfile={session.user.name} />}
    </div>
  )
}
