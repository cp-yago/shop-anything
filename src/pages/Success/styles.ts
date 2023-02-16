import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 64px;

  img {
    width: 492px;
    height: 293px;
    margin: 32px;
  }
`;

export const PurchaseDataContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['gray-400']};
  }

  .purchase-data-container {
    display: flex;
    flex-direction: column;
    border-radius: 6px 36px;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    padding: 40px;
    margin: 32px 0;
  }

  .info-container {
    display: flex;
    align-items: center;
    margin: 8px 0;
    p {
      /* width: 200px; */
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`;