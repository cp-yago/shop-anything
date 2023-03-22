import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { useProducts } from '../hooks/query/useProducts';
import { validateSchema } from '../pages/Checkout/Form/schemaValidator';
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
  onChangeCheckoutFormData,
  setCheckoutFormDataErrors,
} from '../reducers/shopping/actions';
import { cartReducer, CartState, CheckoutFormData } from '../reducers/shopping/reducer';

interface ShoppingContextType {
  cart: CartState,
  handleIncreaseProductQuantity: (productId: number) => void
  handleDecreaseProductQuantity: (productId: number) => void
  handleRemoveProductFromCart: (productId: number) => void
  handleChangeCheckoutFormData: (field: string, value: string) => void
  onSubmit: () => void
}

export const ShoppingContext = createContext({} as ShoppingContextType);

interface ShoppingContextProviderProps {
  children: ReactNode
}

const initialState: CartState = {
  products: [],
  checkoutFormData: { paymentMethod: 'creditCard' } as CheckoutFormData,
};

export function ShoppingContextProvider({
  children,
}: ShoppingContextProviderProps) {
  const { data: products } = useProducts();

  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
  );

  const handleIncreaseProductQuantity = (productId: number) => {
    const product = products?.find((product) => product.id === productId);
    if (product) dispatch(increaseProductQuantity(product));
  };

  const handleDecreaseProductQuantity = (productId: number) => {
    dispatch(decreaseProductQuantity(productId));
  };

  const handleRemoveProductFromCart = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  function handleChangeCheckoutFormData(field: string, value: string) {
    dispatch(onChangeCheckoutFormData(field, value));
  }

  const onSubmit = () => {
    const schemaValidation = validateSchema(cartState.checkoutFormData);
    if (schemaValidation !== 'ok') {
      dispatch(setCheckoutFormDataErrors(schemaValidation));
      console.log('debug schemaValidation', schemaValidation);
    } else {
      window.location.href = '/success';
    }
  };

  useEffect(() => {
    console.log('debug schemaValidation', cartState.checkoutFormDataErrors);
  }, [cartState.checkoutFormDataErrors]);

  const contextValue = useMemo(() => ({
    cart: cartState,
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleRemoveProductFromCart,
    onSubmit,
    handleChangeCheckoutFormData,
  }), [
    cartState,
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleRemoveProductFromCart,
    onSubmit,
    handleChangeCheckoutFormData,
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
