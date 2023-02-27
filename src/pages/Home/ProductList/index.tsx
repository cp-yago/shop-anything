import { Container } from './styles'
import { CoffeeItem } from "../../../components"
import { useCartContext } from '../../../contexts/CartContext'

export const ProductList = () => {
  const { products } = useCartContext()
  return (
    <Container>
      {products.map((product) => (
        <CoffeeItem
          key={product.id}
          id={product.id}
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