import {
  HeaderContainer,
  Brand,
  MyCartButton,
  MyCartText,
  ItemCounter,
} from './styles'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Brand>WeMovies</Brand>
      <MyCartButton>
        <div>
          <MyCartText>Meu Carrinho</MyCartText>
          <ItemCounter>0 itens</ItemCounter>
        </div>
        <CartIcon />
      </MyCartButton>
    </HeaderContainer>
  )
}
