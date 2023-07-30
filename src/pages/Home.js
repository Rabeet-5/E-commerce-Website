import React from 'react'
import Navbar from '../components/Nav/Navbar';
import ProductList from '../features/products/ProductList';

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  )
}

export default Home;
