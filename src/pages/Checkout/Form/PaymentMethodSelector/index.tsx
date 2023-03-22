import { TfiMoney } from 'react-icons/tfi';
import { BsCreditCard2Back } from 'react-icons/bs';
import { Card } from '../../../../components';
import { PaymentTypeOption, PaymentTypeContainer } from './styles';
import { useShoppingContext } from '../../../../contexts/ShoppingContext';

type PaymentMethod = 'creditCard' | 'debitCard' | 'money'

export function PaymentMethodSelector() {
  const { handleChangeCheckoutFormData, cart: { checkoutFormData } } = useShoppingContext();
  const handleSelectPaymentMethod = (paymentMethod: PaymentMethod) => {
    handleChangeCheckoutFormData('paymentMethod', paymentMethod);
  };

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
          isSelected={checkoutFormData.paymentMethod === 'creditCard'}
        >
          <BsCreditCard2Back />
          Credit card
        </PaymentTypeOption>

        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('debitCard')}
          isSelected={checkoutFormData.paymentMethod === 'debitCard'}
        >
          <BsCreditCard2Back />
          Debit card
        </PaymentTypeOption>

        <PaymentTypeOption
          type="button"
          onClick={() => handleSelectPaymentMethod('money')}
          isSelected={checkoutFormData.paymentMethod === 'money'}
        >
          <BsCreditCard2Back />
          Money
        </PaymentTypeOption>
      </PaymentTypeContainer>

    </Card>
  );
}
