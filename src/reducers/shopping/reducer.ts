import { produce } from 'immer';
import { ZodIssue } from 'zod';
import { Product } from '../../interfaces/products';
import { ActionTypes } from './actions';

export interface ProductInCart {
  product: Product
  quantity: number
}

export interface CheckoutFormData {
  zipCode: number
  street: string
  number: number
  additionalInfo: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: string
}

export type PaymentMethod = 'creditCard' | 'debitCard' | 'money'

export interface CartState {
  products: ProductInCart[]
  checkoutFormData: CheckoutFormData
  checkoutFormDataErrors?: ZodIssue[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.INCREASE_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const productIndex = state.products.findIndex(
          (product) => product.product.id === action.payload.product.id,
        );
        const alreadyInCart = productIndex > -1;
        if (!alreadyInCart) {
          draft.products.push({
            product: action.payload.product,
            quantity: 1,
          });
        } else {
          draft.products[productIndex].quantity++;
        }
      });
    case ActionTypes.DECREASE_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const productIndex = state.products.findIndex(
          (product) => product.product.id === action.payload.productId,
        );
        const alreadyInCart = productIndex > -1;
        const productQuantity = draft.products[productIndex].quantity;
        if (alreadyInCart) {
          draft.products[productIndex].quantity--;
          if (productQuantity === 1) {
            draft.products.splice(productIndex, 1);
          }
        }
      });
    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        const productIndex = state.products.findIndex(
          (product) => product.product.id === action.payload.productId,
        );
        const alreadyInCart = productIndex > -1;
        if (alreadyInCart) {
          const productsFiltered = state.products.filter(
            (product) => product.product.id !== action.payload.productId,
          );
          draft.products = productsFiltered;
        }
      });
    case ActionTypes.CHANGE_CHECKOUT_FORM_DATA:
      return produce(state, (draft: any) => {
        const { field, value } = action.payload;
        draft.checkoutFormData[field] = value;
      });
    case ActionTypes.SET_CHECKOUT_FORM_DATA_ERRORS:
      return produce(state, (draft: any) => {
        draft.checkoutFormDataErrors = action.payload.checkoutFormDataErrors;
      });
    default:
      return state;
  }
}
