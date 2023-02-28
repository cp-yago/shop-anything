import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 104px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 32px 160px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LocationButton = styled.button`
  background-color: ${(props) => props.theme['purple-brand']};
  color: ${(props) => props.theme['purple-dark']};
  padding: 8px;
  height: 38px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  z-index: 10;

  width: 38px;
  height: 38px;
  margin-left: 8px;
  padding: 10px;

  svg {
    width: 16px;
    height: 16px;
  }

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Counter = styled.span`
  position: relative;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  width: 15px;
  height: 15px;
  border-radius: 1000px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  top: -35px;
  left: 15px;
  z-index: 10;
`;
