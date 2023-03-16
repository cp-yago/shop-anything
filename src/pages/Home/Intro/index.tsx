import { HiShoppingCart } from 'react-icons/hi';
import { FiBox, FiClock } from 'react-icons/fi';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
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
          <h1>Find the ideal product for your needs</h1>
        </TitleContainer>

        <SubTitleContainer>
          <p>With Shop anything you receive your product wherever you are, at any time</p>
        </SubTitleContainer>

        <ImageContainer>
          <img src="https://i.dummyjson.com/data/products/2/3.jpg" alt="coffee" />
        </ImageContainer>

        <ItemsContainer>
          <BulletWithIcon
            text="Simple and secure purchase"
            icon={<HiShoppingCart />}
            iconBackgroundColor={defaultTheme['yellow-dark']}
          />
          <BulletWithIcon
            text="Packaging keeps the product intact"
            icon={<FiBox />}
            iconBackgroundColor={defaultTheme['gray-300']}
          />
          <BulletWithIcon
            text="Fast and tracked delivery"
            icon={<FiClock />}
            iconBackgroundColor={defaultTheme['yellow-brand']}
          />
          <BulletWithIcon
            text="Best price"
            icon={<RiMoneyDollarBoxLine />}
            iconBackgroundColor={defaultTheme['purple-light']}
          />
        </ItemsContainer>

      </Content>

    </Container>
  );
}
