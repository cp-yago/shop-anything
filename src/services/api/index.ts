import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

export interface Product {
  id: number
  name: string
  description: string
  tags: string[]
  img: string
  price: number
}

export const listProducts = async () => {
  const response = await instance.get<Product[]>('/products')
  return response.data
}