import React from 'react'
import Navbar from '../../components/Nav/Navbar';
import ProductDetails from '../../features/products/component/ProductDetails';

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar >
        <ProductDetails />
      </Navbar>
    </div>
  )
}

export default ProductDetailsPage;
