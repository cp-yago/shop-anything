import { Navbar } from '../../components'
import { Form } from './Form'
import { Container, Content } from './styles'
import { Summary } from './Summary'

export const Checkout = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Form />
        <Summary />
      </Content>
    </Container>
  )
}