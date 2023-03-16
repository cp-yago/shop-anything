import { HiShoppingCart } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import {
  Container,
  ActionsContainer,
  CartButton,
  Counter,
} from './styles';
import { useShoppingContext } from '../../contexts/ShoppingContext';

export function Navbar() {
  const { cart } = useShoppingContext();
  const navigate = useNavigate();
  const location = useLocation();

  const shouldShowCartButton = useCallback((): Boolean => {
    const isPathAllowed = !['/checkout'].includes(location.pathname);
    const isCartEmpty = cart.products.length === 0;
    if (!isPathAllowed || isCartEmpty) return false;
    return true;
  }, [cart, location]);

  const totalProductsInCar = cart.products.reduce((previousValue, {
    quantity,
  }) => previousValue + quantity, 0);

  const handleGoToCart = () => {
    navigate('/checkout');
  };

  return (
    <Container>
      <h1>Shop anything</h1>
      <ActionsContainer>
        {shouldShowCartButton() && (
          <CartButton onClick={handleGoToCart}>
            <HiShoppingCart size={50} />
            {totalProductsInCar > 0 && <Counter>{totalProductsInCar}</Counter>}
          </CartButton>
        )}
      </ActionsContainer>
    </Container>
  );
}
