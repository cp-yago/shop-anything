import { BiTrash } from 'react-icons/bi';
import { Card, QuantitySelector } from '../../../components';
import { Container, SummaryItemContainer } from './styles';

import { useCartContext } from '../../../contexts/CartContext';
import { ProductInCart } from '../../../reducers/shopping/reducer';
import { formatNumberToCurrency } from '../../../utils/formatNumberToCurrency';

interface SummaryItemProps {
  product: ProductInCart
}

function SummaryItem({ product }: SummaryItemProps) {
  const { handleRemoveProductFromCart } = useCartContext();
  const total = product.product.price * product.quantity;

  return (
    <SummaryItemContainer>
      <div className="image-container">
        <img src={product.product.img} alt="Creamy espresso" />
      </div>
      <div className="info-container">
        <h1>Expresso cremoso</h1>
        <div className="quantity-container">
          <QuantitySelector productId={product.product.id} />
          <button type="button" onClick={() => handleRemoveProductFromCart(product.product.id)}>
            <BiTrash />
            Remover
          </button>
        </div>
      </div>
      <div>
        <span>{`R$ ${total}`}</span>
      </div>
    </SummaryItemContainer>
  );
}

export function Summary() {
  const { cart } = useCartContext();

  const totalProductsInCar = () => cart.products.reduce((previousValue, {
    product: { price }, quantity,
  }) => previousValue + quantity * price, 0);

  const freightPrice = cart.products.length > 0 ? 9.99 : 0;

  return (
    <Container>
      <h1>Cafés selecionados</h1>
      <Card>
        {cart.products.map((product) => (
          <SummaryItem product={product} />
        ))}

        <div className="total-container">
          <div className="total-item">
            <span>Total de itens</span>
            <span>{formatNumberToCurrency(totalProductsInCar())}</span>
          </div>
          <div className="total-item">
            <span>Entrega</span>
            <span>{formatNumberToCurrency(freightPrice)}</span>
          </div>
          <div className="total-item">
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>{formatNumberToCurrency(totalProductsInCar() + freightPrice)}</strong>
            </span>
          </div>
          <button
            type="submit"
            form="addressForm"
          >
            Confirmar pedido
          </button>
        </div>
      </Card>
    </Container>
  );
}
