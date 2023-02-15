import { Navbar } from '../../components'
import { OrderData } from './OrderData'
import { Container, Content } from './styles'
import { Summary } from './Summary'

export const Checkout = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <OrderData />
        <Summary />
      </Content>
    </Container>
  )
}