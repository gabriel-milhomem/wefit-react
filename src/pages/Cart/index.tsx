import { useNavigate } from 'react-router-dom'
import shallow from 'zustand/shallow'
import {
  Alert,
  Button,
  ProductItemMobile,
  ProductItemDesktop,
} from '../../components'
import { CartStore, useCartStore } from '../../store'
import { formatCurrency } from '../../util/formatCurrency'
import { useMediaQuery } from 'usehooks-ts'
import {
  CartContainer,
  CartFooter,
  CartHeader,
  CartTotal,
  Label,
  Divider,
  ProductList,
} from './styles'

const selectCartState = (state: CartStore) =>
  [state.totalValue, state.products, state.resetCart] as const

export function Cart() {
  const navigate = useNavigate()
  const matches = useMediaQuery('(min-width: 650px)')
  const [totalValue, products, resetCart] = useCartStore(
    selectCartState,
    shallow,
  )

  if (products.every((product) => product.quantity === 0)) {
    return <Alert alertType="empty" />
  }

  return (
    <CartContainer>
      {matches && (
        <CartHeader>
          <Label> PRODUTO </Label>
          <Label />
          <Label> QTD </Label>
          <Label> SUBTOTAL</Label>
          <Label />
        </CartHeader>
      )}
      <ProductList>
        {products
          .filter((product) => product.quantity > 0)
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((product) =>
            matches ? (
              <ProductItemDesktop product={product} key={product.id} />
            ) : (
              <ProductItemMobile product={product} key={product.id} />
            ),
          )}
      </ProductList>
      <Divider />
      <CartFooter>
        <Button
          fontSize="1.4rem"
          width="23.5rem"
          onClick={() => {
            navigate('/sucesso')
            resetCart()
          }}
        >
          Finalizar Pedido
        </Button>
        <CartTotal>
          <Label>TOTAL</Label>
          <span> {formatCurrency(totalValue)} </span>
        </CartTotal>
      </CartFooter>
    </CartContainer>
  )
}
