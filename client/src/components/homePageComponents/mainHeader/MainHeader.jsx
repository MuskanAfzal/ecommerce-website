import React from "react";
import "./MainHeader.css";

export default function MainHeader() {
  return (
    <>
      <div className="main-header">
        <div className="header-text">
          Up to 10% <br />
          off Voucher <br />
          <span className="shop-now">Shop Now</span>
          <img
            src="/icons8-right-arrow-50.png"
            alt="arrow"
            className="shop-now-icon"
          />
        </div>
        <img
          src="/iphone-14-pro-re-hon-so-voi-iphone-14-pro-max-100-usd-removebg-preview (1).png"
          alt="header"
          className="header-img"
        />
      </div>
      <div className="flash-sale">
        <div className="part-one">
          <div className="red-box"></div>
          <div className="red-sale-heading">Today's</div>
        </div>
        <div className="part-two">
          <div className="flash-sale-heading">Flash Sales </div>
          {/* <img src="/icons8-arrow-50 (1).png" alt="arrow" className="arrow"/>
          <img src="/icons8-arrow-50.png" alt="arrow" className="arrow-two"/> */}
        </div>
        <div className="sale-products">
            
        </div>
      </div>
    </>
  );
}
