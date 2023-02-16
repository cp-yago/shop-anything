import { Container } from './styles'
import { CoffeeItem } from "./CoffeeItem"
import { useCartContext } from '../../../contexts/CartContext'

export const CoffeeList = () => {
  const { products } = useCartContext()
  return (
    <Container>
      {products.map((product) => (
        <CoffeeItem
          key={product.id}
          imgPath={product.img}
          title={product.name}
          subTitle={product.description}
          tags={product.tags}
          price={product.price}
        />
      ))}
    </Container>
  )
}