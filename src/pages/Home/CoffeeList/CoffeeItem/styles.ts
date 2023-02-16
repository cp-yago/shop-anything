import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['white-100']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  margin: 16px;

  img {
    width: 120px;
    position: relative;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: ${(props) => props.theme['gray-400']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-200']};
    font-size: 14px;
    line-height: 130%;
    text-align: center;
  }
`;

export const Tag = styled.div`
  text-transform: uppercase;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 10px;
  padding: 4px;
  border-radius: 100px;
`;

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    color: ${(props) => props.theme['gray-300']};
    margin-right: 4px;
  }

  .price {
    font-family: 'Baloo 2', cursive;
    font-size: 24px;
    color: ${(props) => props.theme['gray-300']};
  }
`;

export const QuantityContainer = styled.div`
  background-color: ${(props) => props.theme['purple-brand']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 72px;
  height: 38px;

  button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme['gray-900']};;

    svg {
      color: ${(props) => props.theme['purple-dark']};;
    }

    transition: color 0.5s;

    &:hover {
      svg {
        color: ${(props) => props.theme['purple-light']};;
      }
    }
  }
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  width: 38px;
  height: 38px;
  margin-left: 8px;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme['purple-light']};
  }
`;