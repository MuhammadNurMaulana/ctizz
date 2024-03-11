export interface Products {
  id: string
  image: string
  title: string
  price: number
  rating: Rating
  discount: string
  categories?: Category[]
  sold: string
}

export interface Rating {
  stars: number
  count: number
}

export interface Category {
  id: string
  name: string
}
