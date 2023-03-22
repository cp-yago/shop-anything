import { BiMap } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from './styles';
import { Card, TextInput } from '../../../components';
import { useShoppingContext } from '../../../contexts/ShoppingContext';
import { PaymentMethodSelector } from './PaymentMethodSelector';

export function Form() {
  const { handleChangeCheckoutFormData } = useShoppingContext();

  return (
    <Container>
      <h1 className="section-title">Complete your order</h1>
      <Card>
        <div className="sub-title">
          <BiMap />
          <h1>Delivery address</h1>
        </div>
        <p>Enter the address where you want to receive your order</p>

        <form id="addressForm">
          <Row>
            <TextInput
              type="text"
              placeholder="Zip code"
              width="30%"
              name="zipCode"
              onChange={(e) => handleChangeCheckoutFormData('zipCode', e.target.value)}
            />
          </Row>
          <Row>
            <TextInput
              type="text"
              placeholder="Street"
              name="street"
              width="90%"
              onChange={(e) => handleChangeCheckoutFormData('street', e.target.value)}
            />
          </Row>
          <Row>
            <TextInput
              type="text"
              placeholder="Number"
              width="80%"
              name="number"
              onChange={(e) => handleChangeCheckoutFormData('number', e.target.value)}
            />
            <TextInput
              type="text"
              placeholder="Additional info"
              name="additionalInfo"
              width="90%"
              onChange={(e) => handleChangeCheckoutFormData('additionalInfo', e.target.value)}
            />
          </Row>
          <Row>
            <TextInput
              type="text"
              placeholder="Neighborhood"
              name="neighborhood"
              width="80%"
              onChange={(e) => handleChangeCheckoutFormData('neighborhood', e.target.value)}
            />
            <TextInput
              type="text"
              placeholder="City"
              name="city"
              width="80%"
              onChange={(e) => handleChangeCheckoutFormData('city', e.target.value)}
            />
            <TextInput
              type="text"
              placeholder="State"
              name="state"
              width="80%"
              onChange={(e) => handleChangeCheckoutFormData('state', e.target.value)}
            />
          </Row>
        </form>
      </Card>

      <PaymentMethodSelector />

    </Container>
  );
}
