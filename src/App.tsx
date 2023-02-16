import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/success',
    element: <Success />
  }
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
