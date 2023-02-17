import {
  Container,
  ActionsContainer,
  LocationButton,
  CartButton,
  Counter
} from './styles'
import { BiMap } from 'react-icons/bi'
import { HiShoppingCart } from 'react-icons/hi'
import logoSvg from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'

export const Navbar = () => {
  const { cart } = useCartContext()
  const navigate = useNavigate()

  const totalProductsInCar = cart.products.reduce((previousValue, { quantity }) => {
    return previousValue + quantity
  }, 0)

  const handleGoToCart = () => {
    navigate('/checkout')
  }

  return (
    <Container>
      <img src={logoSvg} alt="logo" />
      <ActionsContainer>
        <LocationButton>
          <BiMap />
          São Paulo, SP
        </LocationButton>
        <CartButton onClick={handleGoToCart}>
          <HiShoppingCart size={50} />
          {totalProductsInCar > 0 && <Counter>{totalProductsInCar}</Counter>}
        </CartButton>
      </ActionsContainer>
    </Container>
  )
}