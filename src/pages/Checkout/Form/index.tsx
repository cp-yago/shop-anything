import { useForm, useFormContext } from 'react-hook-form';
import { BiMap } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Container, Input, Row } from './styles';
import { Card } from '../../../components';
import { useShoppingContext } from '../../../contexts/ShoppingContext';
import { PaymentMethodSelector } from './PaymentMethodSelector';

export function Form() {
  const { onSubmit } = useShoppingContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    handleSubmit(onSubmit);
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
              error={!!errors.zipCode}
              {...register('zipCode')}
            />
          </Row>
          <Row>
            <Input
              type="text"
              placeholder="Rua"
              {...register('street')}
              width="100%"
              error={!!errors.street}
            />
          </Row>
          <Row>
            <Input
              type="text"
              placeholder="Número"
              {...register('number')}
              width="40%"
              error={!!errors.number}
            />
            <Input
              type="text"
              placeholder="Complemento"
              {...register('additionalInfo')}
              width="60%"
              error={!!errors.additionalInfo}
            />
          </Row>
          <Input
            type="text"
            placeholder="Bairo"
            {...register('neighborhood')}
            width="40%"
            error={!!errors.neighborhood}
          />
          <Input
            type="text"
            placeholder="Cidade"
            {...register('city')}
            width="40%"
            error={!!errors.city}
          />
          <Input
            type="text"
            placeholder="UF"
            {...register('state')}
            width="10%"
            error={!!errors.state}
          />
        </form>
      </Card>

      <PaymentMethodSelector />

    </Container>
  );
}
