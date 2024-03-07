export type BestSeller = {
  id: string
  image: string
  title: string
  price: number
  rating: Rating
  discount: string
  sold: string
}

interface Rating {
  stars: number
  count: number
}
