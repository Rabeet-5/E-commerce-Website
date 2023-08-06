import React from "react";
import Home from "./pages/Home";
import LoginUser from "./components/User/LoginUser";
import SignupUser from "./components/User/SignupUser";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/cart/CartPage";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetailsPage from "./pages/product/DetailsPage";
import Protected from "./features/auth/components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginUser />,
  },
  {
    path: "/signup",
    element: <SignupUser />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <Protected>
        <ProductDetailsPage />
      </Protected>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
