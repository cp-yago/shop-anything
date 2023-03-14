import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
  finishOrder,
} from '../reducers/shopping/actions';
import { cartReducer, CartState } from '../reducers/shopping/reducer';

interface ShoppingContextType {
  cart: CartState,
  // handleIncreaseProductQuantity: (productId: number) => void
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
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
  );

  // const handleIncreaseProductQuantity = (productId: number) => {
  //   const product = products.find((product) => product.id === productId);
  //   if (product) dispatch(increaseProductQuantity(product));
  // };

  const handleDecreaseProductQuantity = (productId: number) => {
    dispatch(decreaseProductQuantity(productId));
  };

  const handleRemoveProductFromCart = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const onSubmit = (data: any) => {
    console.log('debug TA CHEGANDO ISSO: ', data);
    dispatch(finishOrder(data));
  };

  const contextValue = useMemo(() => ({
    cart: cartState,
    // handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleRemoveProductFromCart,
    onSubmit,
  }), [
    cartState,
    // handleIncreaseProductQuantity,
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
