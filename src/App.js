import React from 'react';
import { Counter } from './features/counter/Counter'
import ProductList from './features/products/ProductList';
import Home from './pages/Home';
import LoginUser from './components/User/LoginUser';
import SignupUser from './components/User/SignupUser';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import CartPage from './pages/cart/CartPage';

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
])

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
