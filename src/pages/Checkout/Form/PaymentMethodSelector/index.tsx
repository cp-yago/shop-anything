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

  return (
    <Card>
      <div className="sub-title">
        <TfiMoney />
        <h1>Payment</h1>
      </div>
      <p>Payment is made on delivery. Choose the way you want to pay</p>

      <PaymentTypeContainer>
        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('creditCard')}
          isSelected={paymentMethod === 'creditCard'}
        >
          <BsCreditCard2Back />
          Credit card
        </PaymentTypeOption>

        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('debitCard')}
          isSelected={paymentMethod === 'debitCard'}
        >
          <BsCreditCard2Back />
          Debit card
        </PaymentTypeOption>

        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('money')}
          isSelected={paymentMethod === 'money'}
        >
          <BsCreditCard2Back />
          Money
        </PaymentTypeOption>
      </PaymentTypeContainer>

    </Card>
  );
}
