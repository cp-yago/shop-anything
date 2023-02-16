import { Product } from "../../services/api"
import { ActionTypes } from "./actions"
import { produce } from 'immer'

interface ProductInCart {
  product: Product
  quantity: number
}

interface AddressInfo {
  zipCode: number
  street: string
  number: number
  additionalInfo: string
  neighborhood: string
  city: string
  state: string
}

type PaymentMethod = 'creditCard' | 'debitCard' | 'money'

export interface CartState {
  products: ProductInCart[]
  addressInfo?: AddressInfo
  paymentMethod: PaymentMethod
  freigthPrice: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        draft.products.push({
          product: action.payload.product,
          quantity: 1
        })
      })
    default:
      return state
  }
}