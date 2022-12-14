import {
  MovieQuantity,
  StyledMovieCard,
  MovieImage,
  MovieName,
  MoviePrice,
} from './styles'
import { Button } from '../Button'

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-cart.svg'

export function MovieCard() {
  return (
    <StyledMovieCard>
      <MovieImage>
        <img
          src="https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
          alt="DVD da Viuva negra"
        />
      </MovieImage>

      <MovieName>Viúva Negra</MovieName>
      <MoviePrice>R$ 9.99</MoviePrice>
      <Button>
        <ShoppingCartIcon />
        <MovieQuantity> 0 </MovieQuantity>
        <p> ADICIONAR AO CARRINHO</p>
      </Button>
    </StyledMovieCard>
  )
}
