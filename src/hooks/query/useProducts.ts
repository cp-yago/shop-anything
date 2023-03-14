import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/api/products';

export const useProducts = () => {
  const queryKey = ['products'];
  const query = useQuery({ queryKey, queryFn: getProducts });
  return {
    ...query,
  };
};
