import { useNavigate } from 'react-router-dom'
import { Alert, Button, ProductItem } from '../../components'
import {
  CartContainer,
  CartFooter,
  CartTotal,
  Label,
  Divider,
  ProductList,
} from './styles'

export function Cart() {
  const navigate = useNavigate()
  return (
    <CartContainer>
      <ProductList>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductList>
      <Divider />
      <CartFooter>
        <Button
          fontSize="1.4rem"
          width="23.5rem"
          onClick={() => navigate('/sucesso')}
        >
          Finalizar Pedido
        </Button>
        <CartTotal>
          <Label>TOTAL</Label>
          <span> R$ 29,90 </span>
        </CartTotal>
      </CartFooter>
    </CartContainer>
  )
}
