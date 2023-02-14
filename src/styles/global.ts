import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.white};
    font-size: 16px;
    color: ${({ theme }) => theme['gray-900']}
  }

  button {
    cursor: pointer;
  }
`;