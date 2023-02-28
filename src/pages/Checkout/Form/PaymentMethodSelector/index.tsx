import { TfiMoney } from 'react-icons/tfi';
import { BsCreditCard2Back } from 'react-icons/bs';
import { useFormContext } from 'react-hook-form';
import { Card } from '../../../../components';
import { PaymentTypeOption, PaymentTypeContainer } from './styles';

type PaymentMethod = 'creditCard' | 'debitCard' | 'money'

export function PaymentMethodSelector() {
  const { setValue, watch } = useFormContext();

  const handleSelectPaymentMethod = (paymentMethod: PaymentMethod) => {
    setValue('paymentMethod', paymentMethod, { shouldValidate: true });
  };

  const paymentMethod = watch('paymentMethod');

  console.log('debug paymentMethod', paymentMethod);

  return (
    <Card>
      <div className="sub-title">
        <TfiMoney />
        <h1>Pagamento</h1>
      </div>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

      <PaymentTypeContainer>
        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('creditCard')}
          isSelected={paymentMethod === 'creditCard'}
        >
          <BsCreditCard2Back />
          Cartão de crédito
        </PaymentTypeOption>

        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('debitCard')}
          isSelected={paymentMethod === 'debitCard'}
        >
          <BsCreditCard2Back />
          Cartão de débito
        </PaymentTypeOption>

        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('money')}
          isSelected={paymentMethod === 'money'}
        >
          <BsCreditCard2Back />
          Dinheiro
        </PaymentTypeOption>
      </PaymentTypeContainer>

    </Card>
  );
}
