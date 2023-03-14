import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
  finishOrder,
} from '../reducers/shopping/actions';
import { cartReducer, CartState } from '../reducers/shopping/reducer';
import { listProducts, Product } from '../services/api';

interface ShoppingContextType {
  products: Product[],
  cart: CartState,
  handleIncreaseProductQuantity: (productId: number) => void
  handleDecreaseProductQuantity: (productId: number) => void
  handleRemoveProductFromCart: (productId: number) => void
  onSubmit: (data: any) => void
}

export const ShoppingContext = createContext({} as ShoppingContextType);

interface ShoppingContextProviderProps {
  children: ReactNode
}

const initialState: CartState = {
  products: [],
  freigthPrice: 0,
  paymentMethod: 'creditCard',
};

export function ShoppingContextProvider({
  children,
}: ShoppingContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
  );

  const handleIncreaseProductQuantity = (productId: number) => {
    const product = products.find((product) => product.id === productId);
    if (product) dispatch(increaseProductQuantity(product));
  };

  const handleDecreaseProductQuantity = (productId: number) => {
    dispatch(decreaseProductQuantity(productId));
  };

  const handleRemoveProductFromCart = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const fetchProducts = async () => {
    const coffees = await listProducts();
    setProducts(coffees);
  };

  const onSubmit = (data: any) => {
    console.log('debug TA CHEGANDO ISSO: ', data);
    dispatch(finishOrder(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const contextValue = useMemo(() => ({
    products,
    cart: cartState,
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleRemoveProductFromCart,
    onSubmit,
  }), [
    products,
    cartState,
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleRemoveProductFromCart,
    onSubmit,
  ]);

  return (
    <ShoppingContext.Provider value={contextValue}>
      {children}
    </ShoppingContext.Provider>
  );
}

export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);
  return context;
};
