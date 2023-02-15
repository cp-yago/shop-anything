import {
  Container,
  BuyContainer,
  PriceContainer,
  Tag,
  QuantityContainer,
  CartButton
} from './styles'

import traditionalExpresso from '../../../../assets/coffees/traditional-expresso.svg'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { HiShoppingCart } from 'react-icons/hi'
import { QuantitySelector } from '../../../../components'

interface CoffeeItemProps {
  title: string
  subTitle: string
  tags: string[]
  price: number
  quantity: number
}

export const CoffeeItem = ({
  title,
  subTitle,
  tags,
  price,
  quantity
}: CoffeeItemProps) => {
  return (
    <Container>
      <img src={traditionalExpresso} alt="traditional expresso" />
      {tags.map((tag) => <Tag>{tag}</Tag>)}
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