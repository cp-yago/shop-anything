import {
  Container,
  BuyContainer,
  PriceContainer,
  Tag,
  CartButton
} from './styles'

import { HiShoppingCart } from 'react-icons/hi'
import { QuantitySelector } from '../../../../components'
import { useCartContext } from '../../../../contexts/CartContext'

interface CoffeeItemProps {
  id: number
  title: string
  subTitle: string
  tags: string[]
  price: number
  imgPath: string
}

export const CoffeeItem = ({
  id,
  title,
  subTitle,
  tags,
  price,
  imgPath
}: CoffeeItemProps) => {
  const { handleAddProduct } = useCartContext()

  return (
    <Container>
      <img src={imgPath} alt="traditional expresso" />
      <div>
        {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div>
      </div>
      <BuyContainer>
        <PriceContainer>
          <span>R$</span>
          <span className='price'>{price.toFixed(2)}</span>
        </PriceContainer>
        <QuantitySelector productId={id} />
        <CartButton>
          <HiShoppingCart />
        </CartButton>
      </BuyContainer>
    </Container>
  )
}