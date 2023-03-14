import { BiMap } from 'react-icons/bi';
import { HiShoppingCart } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import logoSvg from '../../assets/logo.svg';
import {
  Container,
  ActionsContainer,
  LocationButton,
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

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <img src={logoSvg} alt="logo" onClick={handleGoHome} />
      <ActionsContainer>
        <LocationButton>
          <BiMap />
          São Paulo, SP
        </LocationButton>
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
