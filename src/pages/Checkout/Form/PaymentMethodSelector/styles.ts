import styled from 'styled-components';

export const PaymentTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
`;

interface PaymentTypeOptionProps {
  isSelected: boolean
}

export const PaymentTypeOption = styled.button<PaymentTypeOptionProps>`
  display: flex;
  align-items: center;

  width: 178.67px;
  height: 51px;
  padding: 16px;

  background: #E6E5E5;
  border-radius: 6px;
  text-transform: uppercase;

  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme['yellow-dark'] : 'transparent')};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: ${(props) => props.theme['gray-300']};
  transition: background-color 0.6s;

  &:hover {
    background-color: ${(props) => props.theme['white-100']};
  }
`;
