import {
  ProductQuantity,
  StyledProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductLabel,
  ProductInfo,
} from './styles'

import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { Product } from '../../@types'
import { CartStore, useCartStore } from '../../store'
import shallow from 'zustand/shallow'
import { formatCurrency } from '../../util/formatCurrency'

interface ProductItemProps {
  product: Product
}

const selectProductActions = (state: CartStore) =>
  [state.increment, state.decrement, state.removeFromCart] as const

export function ProductItem({ product }: ProductItemProps) {
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

      <ProductInfo>
        <div>
          <ProductTitle>{title}</ProductTitle>
          <div className="wrapper">
            <ProductPrice>
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ProductPrice>
            <TrashIcon
              aria-label="Deletar produto"
              role="button"
              onClick={() => removeFromCart({ id })}
            />
          </div>
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
          <div>
            <ProductLabel>SUBTOTAL</ProductLabel>
            <ProductPrice>{formatCurrency(subtotal)}</ProductPrice>
          </div>
        </div>
      </ProductInfo>
    </StyledProductItem>
  )
}
