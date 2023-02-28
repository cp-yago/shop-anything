import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.white};
    font-size: 16px;
    color: ${({ theme }) => theme['gray-900']}
  }

  button {
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
