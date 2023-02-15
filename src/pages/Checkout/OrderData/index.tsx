import { useForm } from "react-hook-form";
import { Container, Card, Input, Row, PaymentTypeContainer, PaymentTypeCard } from "./styles"
import { BiMap } from 'react-icons/bi'
import { TfiMoney } from 'react-icons/tfi'
import { BsCreditCard2Back } from 'react-icons/bs'

export const OrderData = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <h1 className="section-title">Complete seu pedido</h1>
      <Card>
        <div className="sub-title">
          <BiMap />
          <h1>Endereço de entrega</h1>
        </div>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Input type="text" placeholder="CEP" {...register("zipCode")} />
          </Row>
          <Row>
            <Input type="text" placeholder="Rua" {...register("street")} width={'100%'} />
          </Row>
          <Row>
            <Input type="text" placeholder="Número" {...register("number")} width={'40%'} />
            <Input type="text" placeholder="Complemento" {...register("additionalInfo")} width={'60%'} />
          </Row>
          <Input type="text" placeholder="Bairo" {...register("neighborhood")} width={'40%'} />
          <Input type="text" placeholder="Cidade" {...register("city")} width={'40%'} />
          <Input type="text" placeholder="UF" {...register("state")} width={'10%'} />
        </form>
      </Card>
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
    </Container>
  )
}