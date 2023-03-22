import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;

  .section-title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }

  .error-message {
    font-weight: 700;
    margin: 8px 0;
    color: ${(props) => props.theme.danger};
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;
