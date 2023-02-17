import { Container, IntroContainer, TitleContainer, ItemsContainer } from './styles'
import { Navbar } from '../../components'
import { HiShoppingCart } from 'react-icons/hi'
import { FiBox, FiClock } from 'react-icons/fi'
import { BiCoffee } from 'react-icons/bi'

import introCoffee from '../../assets/intro-coffee.svg'
import { defaultTheme } from '../../styles/themes/default'
import { Item } from '../../components/Item'
import { CoffeeList } from './CoffeeList'
import { useCartContext } from '../../contexts/CartContext'

export const Home = () => {
  const { cart } = useCartContext()
  const totalProductsInCar = cart.products.reduce((previousValue, { quantity },) => {
    return previousValue + quantity
  }, 0)
  return (
    <Container>
      <Navbar totalProducts={totalProductsInCar} />
      <IntroContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ItemsContainer>
            <Item
              text='Compra simples e segura'
              icon={<HiShoppingCart />}
              iconBackgroundColor={defaultTheme['yellow-dark']}
            />
            <Item
              text='Embalagem mantém o café intacto'
              icon={<FiBox />}
              iconBackgroundColor={defaultTheme['gray-300']}
            />
            <Item
              text='Entrega rápida e rastreada'
              icon={<FiClock />}
              iconBackgroundColor={defaultTheme['yellow-brand']}
            />
            <Item
              text='O café chega fresquinho até você'
              icon={<BiCoffee />}
              iconBackgroundColor={defaultTheme['purple-light']}
            />
          </ItemsContainer>
        </TitleContainer>
        <img src={introCoffee} alt="coffee" />
      </IntroContainer>
      <CoffeeList />
    </Container>
  )
}