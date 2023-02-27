import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

interface ContainerProps {
  iconBackgroundColor: string
}

export const IconContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${(props) => props.iconBackgroundColor};

  svg {
    color: ${(props) => props.theme.white};
  }
`;