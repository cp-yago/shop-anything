import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme['white-100']};
  border: 1px solid ${(props) => (props.error ? props.theme.danger : '#E6E5E5')};
  border-radius: 4px;
  height: 42px;
  padding: 12px;
  margin: 8px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.danger};
  margin: 0 8px;
`;
