import {
  HeaderContainer,
  Brand,
  MyCartButton,
  MyCartText,
  ItemCounter,
} from './styles'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore, CartStore } from '../../store'

export function Header() {
  const navigate = useNavigate()
  const totalQuantity = useCartStore((state: CartStore) => state.totalQuantity)
  const itemPlural = totalQuantity === 1 ? 'item' : 'itens'

  return (
    <HeaderContainer>
      <Link to="/">
        <Brand> WeMovies </Brand>
      </Link>

      <MyCartButton onClick={() => navigate('/carrinho')}>
        <div>
          <MyCartText>Meu Carrinho</MyCartText>
          <ItemCounter>
            <span> {totalQuantity} </span> {itemPlural}
          </ItemCounter>
        </div>
        <CartIcon title="Meu carrinho" />
      </MyCartButton>
    </HeaderContainer>
  )
}
