import { Card, QuantitySelector } from "../../../components"
import { Container, SummaryItemContainer } from "./styles"
import { BiTrash } from 'react-icons/bi'

import creamyEspresso from '../../../assets/coffees/creamy-espresso.svg'

const SummaryItem = () => {
  return (
    <SummaryItemContainer>
      <div className="image-container">
        <img src={creamyEspresso} alt="Creamy espresso" />
      </div>
      <div className="info-container">
        <h1>Expresso cremoso</h1>
        <div className="quantity-container">
          <QuantitySelector />
          <button>
            <BiTrash />
            Remover
          </button>
        </div>
      </div>
      <div>
        <span>R$ 10,00</span>
      </div>
    </SummaryItemContainer>
  )
}

export const Summary = () => {
  return (
    <Container>
      <h1>Cafés selecionados</h1>
      <Card>
        <SummaryItem />
        <SummaryItem />

        <div className="total-container">
          <div className="total-item">
            <span>Total de itens</span>
            <span>R$ 40,89</span>
          </div>
          <div className="total-item">
            <span>Entrega</span>
            <span>R$ 7,98</span>
          </div>
          <div className="total-item">
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>R$ 7,98</strong>
            </span>
          </div>
          <button>Confirmar pedido</button>
        </div>
      </Card>
    </Container>
  )
}