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

export const Navbar = () => {
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
          <Counter>3</Counter>
        </CartButton>
      </ActionsContainer>
    </Container>
  )
}