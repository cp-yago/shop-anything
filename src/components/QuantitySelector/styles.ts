import styled from 'styled-components';

export const Container = styled.div`
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