import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 0 16px;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }

  .total-container {
    display: flex;
    flex-direction: column;

    padding: 8px;

    button {
      width: 368px;
      height: 46px;
      text-transform: uppercase;
      background-color: ${(props) => props.theme['yellow-brand']};
      color: ${(props) => props.theme.white};
      margin: 32px auto;
    }
  }

  .total-item {
    display: flex;
    justify-content: space-between;
    margin: 8px;
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`;

export const SummaryItemContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 32px;

  .image-container {
    img {
      width: 64px;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }
  }

  .quantity-container {
    display: flex;
    width: 180px;
    justify-content: space-between;

    button {
      padding: 8px;
      color: ${(props) => props.theme['gray-300']};
      background-color: ${(props) => props.theme['purple-brand']};
      border-radius: 6px;

      svg {
        color: ${(props) => props.theme['purple-light']};
      }
    }
  }
`;
