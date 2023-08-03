import React from 'react';
import Home from './pages/Home';
import LoginUser from './components/User/LoginUser';
import SignupUser from './components/User/SignupUser';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import CartPage from './pages/cart/CartPage';
import Checkout from './pages/Checkout/Checkout';
import ProductDetailsPage from './pages/product/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginUser />,
  },
  {
    path: '/signup',
    element: <SignupUser />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/details/:id',
    element: <ProductDetailsPage />,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
