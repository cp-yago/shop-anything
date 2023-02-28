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
  border: 1px solid ${(props) => (props.error ? props.theme.danger : '#E6E5E5')};
  border-radius: 4px;
  height: 42px;
  padding: 12px;
  margin: 8px;
`;
