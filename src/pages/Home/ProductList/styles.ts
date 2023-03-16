import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    width: 70%;
  }
`;
