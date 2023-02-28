import { FormProvider, useForm } from 'react-hook-form';
import { Navbar } from '../../components';
import { Form } from './Form';
import { Container, Content } from './styles';
import { Summary } from './Summary';

export function Checkout() {
  const methods = useForm();

  return (
    <Container>
      <Navbar />
      <Content>
        <FormProvider {...methods}>
          <Form />
          <Summary />
        </FormProvider>
      </Content>
    </Container>
  );
}
