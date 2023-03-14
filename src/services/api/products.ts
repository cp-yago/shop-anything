import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export interface GetProductsResponse {
  products: {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }[]
}

export const getProducts = async () => {
  const response = await instance.get<GetProductsResponse>('https://dummyjson.com/products/category/fragrances');
  return response.data.products;
};
