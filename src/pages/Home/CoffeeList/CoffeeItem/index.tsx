import {
  Container,
  BuyContainer,
  PriceContainer,
  Tag,
  CartButton
} from './styles'

import { HiShoppingCart } from 'react-icons/hi'
import { QuantitySelector } from '../../../../components'

interface CoffeeItemProps {
  title: string
  subTitle: string
  tags: string[]
  price: number
  imgPath: string
}

export const CoffeeItem = ({
  title,
  subTitle,
  tags,
  price,
  imgPath
}: CoffeeItemProps) => {
  return (
    <Container>
      <img src={imgPath} alt="traditional expresso" />
      <div>
        {tags.map((tag) => <Tag>{tag}</Tag>)}
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
        <QuantitySelector />
        <CartButton>
          <HiShoppingCart />
        </CartButton>
      </BuyContainer>
    </Container>
  )
}