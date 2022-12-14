import type { Movie } from './Movies'

export interface Product extends Movie {
  quantity: number
  subtotal: number
}

export interface CartState {
  products: Product[]
  loadingInit: boolean
  totalQuantity: number
  totalValue: number
}
