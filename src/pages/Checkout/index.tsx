import { Header } from '../../components';
import { Form } from './Form';
import { Container, Content } from './styles';
import { Summary } from './Summary';

export function Checkout() {
  return (
    <Container>
      <Header />
      <Content>
        <Form />
        <Summary />
      </Content>
    </Container>
  );
}
