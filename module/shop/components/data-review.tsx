"use client"

import Input from "@/components/form-components/input"
import Label from "@/components/form-components/label"
import { dataReview } from "@/lib/auth/dataReview"
import { FormEvent, useState } from "react"

type Reviews = {
  id: string
  name: string | null
  createdAt: Date
  email: string | null
  review: string | null
  rating: string | null
  imageProfile: string | null
  emailProfile: string | null
  nameProfile: string | null
}

export default function DataReviews({ imageProfile, emailProfile, nameProfile }: any) {
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    if (formData.get("email") == null || formData.get("email") == "" || formData.get("saran") == null || formData.get("saran") == "" || formData.get("rating") == null || formData.get("rating") == "") {
      setError("Please fill in the form")
    } else {
      try {
        const data = {
          name: formData.get("nama"),
          email: formData.get("email"),
          review: formData.get("saran"),
          rating: formData.get("rating"),
          imageProfile,
          emailProfile,
          nameProfile,
        }

        const res = dataReview(data)

        console.log(res.then((res) => setError(res.message)))

        console.log(data)
        e.currentTarget.reset()
      } catch (error) {
        setError("Something went wrong")
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="px-16 my-10">
      <h1 className="text-xl font-semibold my-8">Tambah review yang kamu berikan</h1>
      <div className="grid gap-2">
        <Label label="Rating" name="rating" />
        <select name="rating" id="rating" className="p-4">
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div className="grid gap-2 my-8">
        <div className="grid">
          <Label label="Judul" name="nama" />
          <Input type="text" name="nama" placeholder="Masukkan Judul" />
        </div>
        <div className="grid">
          <Label label="Email" name="email" />
          <Input type="email" name="email" placeholder="Masukkan Email" />
        </div>
        <div className="grid">
          <Label label="Saran" name="saran" />
          <textarea rows={5} name="saran" id="saran" placeholder="Masukkan Saran Review Produk Anda" className="bg-transparent p-2 text-sm border border-neutral-700 rounded placeholder:text-neutral-400 text-neutral-600" />
        </div>
      </div>
      {error && <p className="text-red-500 bg-neutral-300 p-3 text-center my-4 font-bold font-serif text-sm rounded-[5px]">{error}</p>}
      <button type="submit" className="bg-neutral-700 text-white rounded-[5px] py-1 px-8 font-semibold text-sm">
        Kirim
      </button>
    </form>
  )
}
