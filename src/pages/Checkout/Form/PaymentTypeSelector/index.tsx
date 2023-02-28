import { TfiMoney } from 'react-icons/tfi';
import { BsCreditCard2Back } from 'react-icons/bs';
import { Card } from '../../../../components';
import { PaymentTypeCard, PaymentTypeContainer } from './styles';

export function PaymentTypeSelector() {
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
  );
}