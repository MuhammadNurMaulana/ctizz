export type BestSeller = { id: string; image: string; title: string; price: number; rating: Rating }

interface Rating {
  stars: number
  count: number
}
