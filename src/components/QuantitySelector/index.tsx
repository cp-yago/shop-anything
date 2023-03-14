import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useMemo } from 'react';
import { Container } from './styles';
import { useShoppingContext } from '../../contexts/ShoppingContext';

interface QuantitySelectorProps {
  productId: number
}

export function QuantitySelector({ productId }: QuantitySelectorProps) {
  const {
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    cart,
  } = useShoppingContext();

  const quantity = useMemo(
    () => cart.products.find(
      (product) => product.product.id === productId,
    )?.quantity || 0,
    [cart],
  );

  return (
    <Container>
      <button type="button" onClick={() => handleDecreaseProductQuantity(productId)}>
        <AiOutlineMinus />
      </button>
      <span className="quantity">{quantity}</span>
      <button type="button" onClick={() => handleIncreaseProductQuantity(productId)}>
        <AiOutlinePlus />
      </button>
    </Container>
  );
}
