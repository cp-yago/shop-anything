import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 64px 160px;

  img {
    width: 400px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    margin-bottom: 8px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 130%;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 8px 0;
`;


