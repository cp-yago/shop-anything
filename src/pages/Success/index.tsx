import { IconWithBackground, Navbar } from "../../components"
import { Container, Content, PurchaseDataContainer } from "./styles"
import { BiMap } from 'react-icons/bi'

import successImage from '../../assets/illustration.svg'
import { defaultTheme } from "../../styles/themes/default"
import { FiClock } from "react-icons/fi"
import { TfiMoney } from "react-icons/tfi"

export const Success = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <PurchaseDataContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <div className="purchase-data-container">
            <div className="info-container">
              <IconWithBackground
                icon={<BiMap />}
                iconBackgroundColor={defaultTheme["purple-light"]}
              />
              <p>
                Entrega em Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS
              </p>
            </div>

            <div className="info-container">
              <IconWithBackground
                icon={<FiClock />}
                iconBackgroundColor={defaultTheme["yellow-brand"]}
              />
              <p>
                Previsão de entrega 20 min - 30 min
              </p>
            </div>

            <div className="info-container">
              <IconWithBackground
                icon={<TfiMoney />}
                iconBackgroundColor={defaultTheme["yellow-dark"]}
              />
              <p>
                Pagamento na entrega Cartão de Crédito
              </p>
            </div>

          </div>

        </PurchaseDataContainer>
        <img src={successImage} alt="success" />
      </Content>
    </Container>
  )
}