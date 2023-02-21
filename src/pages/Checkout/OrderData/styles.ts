import React from 'react';
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
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme['white-100']};
  border: 1px solid ${(props) => props.error ? props.theme.danger: '#E6E5E5'};
  border-radius: 4px;
  height: 42px;
  padding: 12px;
  margin: 8px;
`;

export const PaymentTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
`;

export const PaymentTypeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 178.67px;
  height: 51px;
  padding: 16px;

  background: #E6E5E5;
  border-radius: 6px;
  text-transform: uppercase;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: ${(props) => props.theme['gray-300']};
  transition: background-color 0.6s;

  &:hover {
    background-color: ${(props) => props.theme['white-100']};
    border: 1px solid #E6E5E5;
  }
`;