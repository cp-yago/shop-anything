import styled from 'styled-components';

interface ContainerProps {
  iconBackgroundColor: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  margin-right: 32px;
  

  .icon {
    background-color: ${(props) => props.iconBackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 8px;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;