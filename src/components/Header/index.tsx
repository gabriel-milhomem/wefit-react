import {
  HeaderContainer,
  Brand,
  MyCartButton,
  MyCartText,
  ItemCounter,
} from './styles'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Link to="/">
        <Brand> WeMovies </Brand>
      </Link>

      <MyCartButton onClick={() => navigate('/carrinho')}>
        <div>
          <MyCartText>Meu Carrinho</MyCartText>
          <ItemCounter>
            <span> 0 </span> itens
          </ItemCounter>
        </div>
        <CartIcon />
      </MyCartButton>
    </HeaderContainer>
  )
}
