import { Container, TitleContainer, ItemsContainer } from './styles'
import { BulletWithIcon } from '../../../components'
import { HiShoppingCart } from 'react-icons/hi'
import { FiBox, FiClock } from 'react-icons/fi'
import { BiCoffee } from 'react-icons/bi'

import introCoffee from '../../../assets/intro-coffee.svg'
import { defaultTheme } from '../../../styles/themes/default'

export const Intro = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <ItemsContainer>
          <BulletWithIcon
            text='Compra simples e segura'
            icon={<HiShoppingCart />}
            iconBackgroundColor={defaultTheme['yellow-dark']}
          />
          <BulletWithIcon
            text='Embalagem mantém o café intacto'
            icon={<FiBox />}
            iconBackgroundColor={defaultTheme['gray-300']}
          />
          <BulletWithIcon
            text='Entrega rápida e rastreada'
            icon={<FiClock />}
            iconBackgroundColor={defaultTheme['yellow-brand']}
          />
          <BulletWithIcon
            text='O café chega fresquinho até você'
            icon={<BiCoffee />}
            iconBackgroundColor={defaultTheme['purple-light']}
          />
        </ItemsContainer>
      </TitleContainer>
      <img src={introCoffee} alt="coffee" />
    </Container>
  )
}