import axios from 'axios';
import { Product } from '../../interfaces/products';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export interface GetProductsResponse {
  products: Product[]
}

export const getProducts = async () => {
  const response = await instance.get<GetProductsResponse>('https://dummyjson.com/products?limit=8&skip=0');
  return response.data.products;
};
