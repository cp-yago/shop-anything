import { Product } from "../../services/api";

export const enum ActionTypes {
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function increaseProductQuantity(product: Product) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: {
      product
    }
  }
}

export function decreaseProductQuantity(productId: number) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: {
      productId
    }
  }
}

export function removeProduct(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId
    }
  }
}