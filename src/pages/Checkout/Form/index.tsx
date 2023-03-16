import { BiMap } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Container, Input, Row } from './styles';
import { Card } from '../../../components';
import { useShoppingContext } from '../../../contexts/ShoppingContext';
import { PaymentMethodSelector } from './PaymentMethodSelector';

export function Form() {
  const { handleChangeCheckoutFormData } = useShoppingContext();

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate('/success');
  };

  return (
    <Container>
      <h1 className="section-title">Complete your order</h1>
      <Card>
        <div className="sub-title">
          <BiMap />
          <h1>Delivery address</h1>
        </div>
        <p>Enter the address where you want to receive your order</p>

        <form id="addressForm" onSubmit={handleFormSubmit}>
          <Row>
            <Input
              type="text"
              placeholder="CEP"
              name="zipCode"
              onChange={(e) => handleChangeCheckoutFormData('zipCode', e.target.value)}
            />
          </Row>
          <Row>
            <Input
              type="text"
              placeholder="Rua"
              name="street"
              width="100%"
              onChange={(e) => handleChangeCheckoutFormData('street', e.target.value)}
            />
          </Row>
          <Row>
            <Input
              type="text"
              placeholder="Número"
              name="number"
              width="40%"
              onChange={(e) => handleChangeCheckoutFormData('number', e.target.value)}
            />
            <Input
              type="text"
              placeholder="Complemento"
              name="additionalInfo"
              width="60%"
              onChange={(e) => handleChangeCheckoutFormData('additionalInfo', e.target.value)}
            />
          </Row>
          <Input
            type="text"
            placeholder="Bairo"
            name="neighborhood"
            width="40%"
            onChange={(e) => handleChangeCheckoutFormData('neighborhood', e.target.value)}
          />
          <Input
            type="text"
            placeholder="Cidade"
            name="city"
            width="40%"
            onChange={(e) => handleChangeCheckoutFormData('city', e.target.value)}
          />
          <Input
            type="text"
            placeholder="UF"
            name="state"
            width="10%"
            onChange={(e) => handleChangeCheckoutFormData('state', e.target.value)}
          />
        </form>
      </Card>

      <PaymentMethodSelector />

    </Container>
  );
}
