import { Product } from "../../services/api";

export const enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
}

export function addProductToCart(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      product
    }
  }
}