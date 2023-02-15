import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme['white-100']};
  border-radius: 6px;
  padding: 40px;
  margin: 16px 0;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  .sub-title {
    display: flex;
    padding: 0 16px;
  }

  form {
    margin-top: 8px;
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    margin-right: 8px;
  }

  h1 {
    font-size: 16px;
    color: ${(props) => props.theme['gray-400']};
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme['gray-300']};
    padding: 0 16px;
  }
`;