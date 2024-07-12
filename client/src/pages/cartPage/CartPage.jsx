import React from "react";
import "./CartPage.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleQuantityChange = (item, newQuantity) => {
    newQuantity = parseInt(newQuantity, 10);
    if (isNaN(newQuantity) || newQuantity < 0) return;

    if (newQuantity > item.quantity) {
      dispatch(addToCart({ ...item, quantity: newQuantity - item.quantity }));
    } else if (newQuantity < item.quantity) {
      dispatch(removeFromCart({ id: item.id }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {cart.length > 0 ? (
          <>
            <ul className="cart-heading">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
            <div className="cart-items-box">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span id="cart-product-name">{item.name}</span>
                  <span id="cart-product-price">${item.price.toFixed(2)}</span>
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                    className="quantity-input"
                  />
                  <span id="cart-product-total-price">${item.totalPrice.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="total-section">
                <p className="cart-total-heading">Cart Total</p>
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span> <hr />
                <span>Shipping:</span>
                <span>Free</span> <hr />
                <span>Total:</span> 
                <span>${total.toFixed(2)}</span>
                <button className="checkout-button">Proceed to Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart-message">
            Add products inside your cart. Your cart is currently empty!
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
