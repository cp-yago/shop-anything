import React from 'react';
import { useShoppingContext } from '../../contexts/ShoppingContext';
import { Container, Input, ErrorMessage } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function TextInput(props: InputProps) {
  const { cart: { checkoutFormDataErrors } } = useShoppingContext();

  const getInputError = () => {
    const error = checkoutFormDataErrors?.find((error) => error.path[0] === props?.name);
    return error?.message;
  };

  const errorMessage = getInputError();

  return (
    <Container>
      <Input error={!!errorMessage} {...props} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
}
