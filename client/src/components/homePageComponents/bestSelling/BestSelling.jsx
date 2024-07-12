import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";  // Ensure the path to cartSlice is correct
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./BestSelling.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BestSelling(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Initialize the navigate function

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  function displayStars(rating) {
    const starCount = 5;
    const filledStars = Math.round(rating);

    return Array.from({ length: starCount }, (_, index) => (
      <span key={index} className={index < filledStars ? "filled" : "empty"}>
        &#9733;
      </span>
    ));
  }

  const productsDetails = props.bestSelling.slice(0, 4).map((product, index) => {
    const productId = product.id || `product-${index}`; // Use provided ID or generate a fallback ID based on index

    return (
      <div key={productId} className="product">
        <img 
          src={product.img} 
          alt={product.name} 
          className="img"
          onClick={() => navigate(`/product/${productId}`)}/> 
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="rating">{displayStars(product.rating)}</p>
        <span 
          role="button" 
          className="add-to-cart-button" 
          onClick={() => dispatch(addToCart({...product, id: productId}))} // Ensure productId is included in the dispatch
          tabIndex="0"
        >
          Add to Cart
        </span>
      </div>
    );
  });

  return (
    <div className="best-selling">
      <div className="part-one">
        <div className="red-box"></div>
        <div className="red-sale-heading">This Month</div>
      </div>
      <div className="part-two">
        <div className="flash-sale-heading">Best Selling Products</div>
      </div>
      <div className="flash-sale-products" id="best-selling-products">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          autoPlay={false}
          ssr={true} // Server-side rendering
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {productsDetails}
        </Carousel>
        <button className="view-all-products " id="view-all-products-2">View All</button>
      </div>
    </div>
  );
}
