import { Product } from '../../interfaces/products';
import { CheckoutFormData, PaymentMethod } from './reducer';

export const enum ActionTypes {
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  FINISH_ORDER = 'FINISH_ORDER',
}

export function increaseProductQuantity(product: Product) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: {
      product,
    },
  };
}

export function decreaseProductQuantity(productId: number) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  };
}

export function removeProduct(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
}

export function finishOrder(
  checkoutFormData: CheckoutFormData,
) {
  return {
    type: ActionTypes.FINISH_ORDER,
    payload: {
      checkoutFormData,
    },
  };
}
