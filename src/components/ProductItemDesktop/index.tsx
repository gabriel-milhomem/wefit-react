import {
  ProductQuantity,
  StyledProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './styles'

import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { Product } from '../../@types'
import { CartStore, useCartStore } from '../../store'
import shallow from 'zustand/shallow'
import { formatCurrency } from '../../util/formatCurrency'

interface ProductItemDesktopProps {
  product: Product
}

const selectProductActions = (state: CartStore) =>
  [state.increment, state.decrement, state.removeFromCart] as const

export function ProductItemDesktop({ product }: ProductItemDesktopProps) {
  const { title, price, quantity, image, id, subtotal } = product
  const [increment, decrement, removeFromCart] = useCartStore(
    selectProductActions,
    shallow,
  )

  return (
    <StyledProductItem>
      <ProductImage>
        <img src={image} alt={`DVD da ${title}`} />
      </ProductImage>

      <div>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </ProductPrice>
      </div>

      <div>
        <ProductQuantity>
          <MinusIcon
            aria-label="Diminuir um produto"
            role="button"
            onClick={() => quantity - 1 > 0 && decrement({ id })}
          />
          <input
            name="productQuantity"
            type="number"
            readOnly
            value={quantity}
          />
          <PlusIcon
            aria-label="Adicionar um produto"
            role="button"
            onClick={() => increment({ id })}
          />
        </ProductQuantity>
      </div>

      <ProductPrice>{formatCurrency(subtotal)}</ProductPrice>

      <TrashIcon
        aria-label="Deletar produto"
        role="button"
        onClick={() => removeFromCart({ id })}
      />
    </StyledProductItem>
  )
}
