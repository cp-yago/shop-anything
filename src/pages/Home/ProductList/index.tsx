import { Container } from './styles';
import { ProductItem } from '../../../components';
import { useProducts } from '../../../hooks/query/useProducts';

export function ProductList() {
  const { data: products } = useProducts();

  return (
    <Container>
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          imgPath={product.thumbnail}
          title={product.title}
          subTitle={product.description}
          tags={['product.tags']}
          price={product.price}
        />
      ))}
    </Container>
  );
}
