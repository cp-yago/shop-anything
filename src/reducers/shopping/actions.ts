import { ZodIssue } from 'zod';
import { Product } from '../../interfaces/products';

export const enum ActionTypes {
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CHANGE_CHECKOUT_FORM_DATA = 'CHANGE_CHECKOUT_FORM_DATA',
  SET_CHECKOUT_FORM_DATA_ERRORS = 'SET_CHECKOUT_FORM_DATA_ERRORS'
}

export function setCheckoutFormDataErrors(checkoutFormDataErrors: ZodIssue[]) {
  return {
    type: ActionTypes.SET_CHECKOUT_FORM_DATA_ERRORS,
    payload: {
      checkoutFormDataErrors,
    },
  };
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

export function onChangeCheckoutFormData(
  field: string,
  value: string,
) {
  return {
    type: ActionTypes.CHANGE_CHECKOUT_FORM_DATA,
    payload: {
      field,
      value,
    },
  };
}
