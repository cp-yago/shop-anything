import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/api/products';

export const useProducts = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return {
    ...query,
  };
};
