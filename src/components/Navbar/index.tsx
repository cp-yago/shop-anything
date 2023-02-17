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

interface NavbarProps {
  totalProducts: number
}

export const Navbar = ({ totalProducts }: NavbarProps) => {
  return (
    <Container>
      <img src={logoSvg} alt="logo" />
      <ActionsContainer>
        <LocationButton>
          <BiMap />
          São Paulo, SP
        </LocationButton>
        <CartButton>
          <HiShoppingCart size={50} />
          {totalProducts > 0 && <Counter>{totalProducts}</Counter>}
        </CartButton>
      </ActionsContainer>
    </Container>
  )
}