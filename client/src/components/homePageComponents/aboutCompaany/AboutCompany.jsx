import React from "react";
import "./AboutCompany.css";

export default function AboutCompany() {
  return (
    <div className="about-company">
      <div className="about-comany-img">
      <img src="/images/icons/delivery.png" alt="Delivery" />
      <img src="/images/icons/headphone.png" alt="Delivery" />
      <img src="/images/icons/cashback.png" alt="Delivery" />
      </div>
      <div className="h1-components">
        <h1>FREE AND FAST DELIVERY</h1>
        <h1>24/7 CUSTOMER SERVICE</h1>
        <h1>MONEY BACK GUARANTEE</h1>
      </div>
      <div className="h2-components">
        <p>Free delivery for all orders above $140</p>
        <p>Friendly 24/7 customer support</p>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
}
