import axios from 'axios';
import { Product } from '../../interfaces/products';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export interface GetProductsResponse {
  products: Product[]
}

interface GetProductsParams {
  limit?: number
  skip?: number
}

export const getProducts = async ({ limit = 8, skip = 0 }: GetProductsParams) => {
  const response = await instance.get<GetProductsResponse>(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  return response.data.products;
};
