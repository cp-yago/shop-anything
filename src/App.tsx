import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { ShoppingContextProvider } from './contexts/ShoppingContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/success',
    element: <Success />,
  },
]);

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingContextProvider>
        <RouterProvider router={router} />
      </ShoppingContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
