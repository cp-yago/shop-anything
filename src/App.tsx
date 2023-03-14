import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { ShoppingContextProvider } from './contexts/ShoppingContext';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <ShoppingContextProvider>
          <RouterProvider router={router} />
        </ShoppingContextProvider>
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
