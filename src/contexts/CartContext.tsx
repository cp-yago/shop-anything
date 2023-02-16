import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'
import { addProductToCart } from '../reducers/shopping/actions'
import { cartReducer, CartState } from '../reducers/shopping/reducer'
import { listProducts, Product } from '../services/api'

interface CartContextType {
  products: Product[],
  cart: CartState,
  handleAddProduct: (product: Product) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const initialState: CartState = {
  products: [],
  freigthPrice: 0,
  paymentMethod: 'creditCard'
}

export function CartContextProvider({
  children
}: CartContextProviderProps) {

  const [products, setProducts] = useState<Product[]>([])

  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
  )

  const handleAddProduct = (product: Product) => {
    dispatch(addProductToCart(product))
  }

  const fetchProducts = async () => {
    const coffees = await listProducts()
    setProducts(coffees)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <CartContext.Provider value={{
      products,
      cart: initialState,
      handleAddProduct,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}