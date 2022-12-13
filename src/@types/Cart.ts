import type { Movie } from './Movies'

export interface Product extends Movie {
  quantity: number
  subtotal: number
}

export interface Cart {
  items: Product[]
  total: number
}
