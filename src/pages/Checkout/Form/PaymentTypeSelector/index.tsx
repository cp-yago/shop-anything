import { Card } from "../../../../components"
import { TfiMoney } from 'react-icons/tfi'
import { PaymentTypeCard, PaymentTypeContainer } from "./styles"
import { BsCreditCard2Back } from 'react-icons/bs'

export const PaymentTypeSelector = () => {
  return (
    <Card>
      <div className="sub-title">
        <TfiMoney />
        <h1>Pagamento</h1>
      </div>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

      <PaymentTypeContainer>
        <PaymentTypeCard>
          <BsCreditCard2Back />
          Cartão de crédito
        </PaymentTypeCard>

        <PaymentTypeCard>
          <BsCreditCard2Back />
          Cartão de débito
        </PaymentTypeCard>

        <PaymentTypeCard>
          <BsCreditCard2Back />
          Dinheiro
        </PaymentTypeCard>
      </PaymentTypeContainer>

    </Card>
  )
}