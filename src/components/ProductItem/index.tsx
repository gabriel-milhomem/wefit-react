import {
  ProductQuantity,
  StyledProductItem,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductLabel,
  ProductInfo,
} from './styles'

import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'

export function ProductItem() {
  return (
    <StyledProductItem>
      <ProductImage>
        <img
          src="https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
          alt="DVD da Viuva negra"
        />
      </ProductImage>

      <ProductInfo>
        <div>
          <ProductName>Homem Aranha</ProductName>
          <div className="wrapper">
            <ProductPrice>R$ 29.99</ProductPrice>
            <TrashIcon aria-label="Deletar produto" role="button" />
          </div>
        </div>

        <div>
          <ProductQuantity>
            <MinusIcon aria-label="Diminuir um produto" role="button" />
            <input name="productQuantity" type="number" readOnly value="1" />
            <PlusIcon aria-label="Adicionar um produto" role="button" />
          </ProductQuantity>
          <div>
            <ProductLabel>SUBTOTAL</ProductLabel>
            <ProductPrice>R$ 29.99</ProductPrice>
          </div>
        </div>
      </ProductInfo>
    </StyledProductItem>
  )
}
