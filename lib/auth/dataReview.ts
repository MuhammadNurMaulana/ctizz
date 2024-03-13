"use server"

import { db } from "../db"

export const dataReview = async (body: any) => {
  const { rating, review, name, email, imageProfile, emailProfile, nameProfile }: any = body

  await db.review.create({
    data: {
      nameProfile,
      rating,
      review,
      name,
      email,
      imageProfile,
      emailProfile,
    },
  })

  return { message: "Review Created" }
}
