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
        console.log('debug draft', draft) 
        const productIndex = state.products.findIndex(
          (product) => product.product.id === action.payload.product.id
        )
        const alreadyInCart = productIndex > -1
        if (!alreadyInCart) {
          draft.products.push({
            product: action.payload.product,
            quantity: 1
          })
        } else {
          draft.products[productIndex].quantity++
        }
      })
    default:
      return state
  }
}