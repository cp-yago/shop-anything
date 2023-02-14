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

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  width: 38px;
  height: 38px;
  margin-left: 8px;
`;