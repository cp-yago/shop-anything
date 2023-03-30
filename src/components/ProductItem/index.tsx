import { HiShoppingCart } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import {
  Container,
  BuyContainer,
  PriceContainer,
  Tag,
  CartButton,
} from './styles';

import { QuantitySelector } from '..';
import { useShoppingContext } from '../../contexts/ShoppingContext';

interface ProductItemProps {
  id: number
  title: string
  subTitle: string
  tags: string[]
  price: number
  imgPath: string
}

export function ProductItem({
  id,
  title,
  subTitle,
  tags,
  price,
  imgPath,
}: ProductItemProps) {
  const navigate = useNavigate();

  const { cart } = useShoppingContext();

  const handleGoToCart = () => {
    navigate('/checkout');
  };

  const shouldShowCartButton = useMemo((): boolean => {
    const isCartEmpty = cart.products.length < 1;
    if (isCartEmpty) { return false; }
    return true;
  }, [cart.products]);

  return (
    <Container>
      <img src={imgPath} alt={title} />
      <div>
        {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div />
      <BuyContainer>
        <PriceContainer>
          <span>R$</span>
          <span className="price">{price.toFixed(2)}</span>
        </PriceContainer>
        <QuantitySelector productId={id} />
        <CartButton onClick={handleGoToCart} disabled={!shouldShowCartButton}>
          <HiShoppingCart />
        </CartButton>
      </BuyContainer>
    </Container>
  );
}
