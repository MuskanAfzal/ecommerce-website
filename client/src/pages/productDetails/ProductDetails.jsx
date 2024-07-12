import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import "./ProductDetails.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, status } = useSelector(state => state.data); // Access products and status from state.data

  console.log("All products in state:", products); // Log all products to see what's in state
  console.log("Current productId:", productId); // Log the current productId

  if (status !== 'succeeded') {
    return <div>Loading...</div>; // Handle loading state
  }

  const product = products.find(product => product.id === productId);
  console.log("Product found:", product); // Log the product found with the productId

  const handleAddToCart = () => {
    console.log("Adding to cart:", { ...product, quantity: 1 }); // Log the product details being added to cart
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (!product) {
    console.error("No product found for id:", productId); // Log error if no product found
    return <div>Product not found!</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="product-details">
      <img src={product.img} alt={product.name} className="product-image-detail" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetails;
