import { produce } from 'immer';
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
  checkoutFormData?: CheckoutFormData
  paymentMethod: PaymentMethod
  freigthPrice: number
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
    case ActionTypes.FINISH_ORDER:
      return produce(state, (draft) => {
        draft.checkoutFormData = action.payload.checkoutFormData;
      });
    default:
      return state;
  }
}
