import { BiTrash } from 'react-icons/bi';
import { Card, QuantitySelector } from '../../../components';
import { Container, SummaryItemContainer } from './styles';

import { useShoppingContext } from '../../../contexts/ShoppingContext';
import { ProductInCart } from '../../../reducers/shopping/reducer';
import { formatNumberToCurrency } from '../../../utils/formatNumberToCurrency';

interface SummaryItemProps {
  product: ProductInCart
}

function SummaryItem({ product }: SummaryItemProps) {
  const { handleRemoveProductFromCart } = useShoppingContext();
  const total = product.product.price * product.quantity;

  return (
    <SummaryItemContainer>
      <div className="image-container">
        <img src={product.product.thumbnail} alt="Creamy espresso" />
      </div>
      <div className="info-container">
        <h1>{product.product.title}</h1>
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
  const { cart: { products } } = useShoppingContext();

  const totalProductsInCar = () => products.reduce((previousValue, {
    product: { price }, quantity,
  }) => previousValue + quantity * price, 0);

  const freightPrice = products.length > 0 ? 9.99 : 0;

  return (
    <Container>
      <h1>Cafés selecionados</h1>
      <Card>
        {products.map((product) => (
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
