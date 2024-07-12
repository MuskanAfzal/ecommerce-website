import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [highlight, setHighlight] = useState(false);
  const cart = useSelector((state) => state.cart);  // Accessing cart state
  const navigate = useNavigate();

  // Highlight effect for changes in the cart's total quantity
  useEffect(() => {
    console.log("Cart state updated:", cart);
    if (cart.totalQuantity > 0) {
      setHighlight(true);
      setTimeout(() => setHighlight(false), 500); // Remove highlight after animation
    }
  }, [cart.totalQuantity]);  // Depend on totalQuantity for changes

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Search query updated to:", event.target.value);  // Log changes to search query
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      console.log("Navigating to search results for:", searchQuery);  // Log search submission
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleIconClick = () => {
    if (searchQuery) {
      console.log("Search icon clicked with query:", searchQuery);  // Log search icon click
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div>
      <div className="top-header">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link to="/sale" className="top-header-span">
          Shop Now
        </Link>
      </div>
      <div className="bottom-header">
        <div className="header-object-one">Exclusive</div>
        <div className="header-list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
        <div className="input-field-wrapper">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="input-field"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Find your item today."
            />
            <button type="button" className="search-button" onClick={handleIconClick}></button>
          </form>
        </div>
        <div className="header-icons">
          <Link to="/favorites">
            <img src="/icons8-heart-50.png" alt="Favorites" className="heart" />
          </Link>
          <Link to="/cart">
            <img src="/icons8-cart-50.png" alt="Cart" className="cart" />
            {cart.totalQuantity > 0 && (
              <span className={`cart-count ${highlight ? "cart-count-update" : ""}`}>
                {cart.totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
