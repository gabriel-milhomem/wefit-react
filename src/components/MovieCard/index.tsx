import {
  MovieQuantity,
  StyledMovieCard,
  MovieImage,
  MovieTitle,
  MoviePrice,
} from './styles'
import { Button } from '../Button'

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-cart.svg'
import { Product } from '../../@types'
import { CartStore, useCartStore } from '../../store'
import { formatCurrency } from '../../util/formatCurrency'

interface MovieCardProps {
  product: Omit<Product, 'subtotal'>
}

export function MovieCard({ product }: MovieCardProps) {
  const addToCart = useCartStore((state: CartStore) => state.addToCart)
  const { title, price, image, quantity, id } = product
  const buttonText = quantity > 0 ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'

  return (
    <StyledMovieCard>
      <MovieImage>
        <img src={image} alt={`DVD da ${title}`} />
      </MovieImage>

      <MovieTitle>{title}</MovieTitle>
      <MoviePrice>{formatCurrency(price)}</MoviePrice>
      <Button onClick={() => addToCart({ id })} active={quantity > 0}>
        <ShoppingCartIcon />
        <MovieQuantity> {quantity} </MovieQuantity>
        <p> {buttonText}</p>
      </Button>
    </StyledMovieCard>
  )
}
