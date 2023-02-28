import { HiShoppingCart } from 'react-icons/hi';
import { FiBox, FiClock } from 'react-icons/fi';
import { BiCoffee } from 'react-icons/bi';
import { BulletWithIcon } from '../../../components';
import {
  Container,
  Content,
  TitleContainer,
  SubTitleContainer,
  ImageContainer,
  ItemsContainer,
} from './styles';

import introCoffee from '../../../assets/intro-coffee.svg';
import { defaultTheme } from '../../../styles/themes/default';

export function Intro() {
  return (
    <Container>

      <Content>

        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        </TitleContainer>

        <SubTitleContainer>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </SubTitleContainer>

        <ImageContainer>
          <img src={introCoffee} alt="coffee" />
        </ImageContainer>

        <ItemsContainer>
          <BulletWithIcon
            text="Compra simples e segura"
            icon={<HiShoppingCart />}
            iconBackgroundColor={defaultTheme['yellow-dark']}
          />
          <BulletWithIcon
            text="Embalagem mantém o café intacto"
            icon={<FiBox />}
            iconBackgroundColor={defaultTheme['gray-300']}
          />
          <BulletWithIcon
            text="Entrega rápida e rastreada"
            icon={<FiClock />}
            iconBackgroundColor={defaultTheme['yellow-brand']}
          />
          <BulletWithIcon
            text="O café chega fresquinho até você"
            icon={<BiCoffee />}
            iconBackgroundColor={defaultTheme['purple-light']}
          />
        </ItemsContainer>

      </Content>

    </Container>
  );
}
