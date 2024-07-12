import React from "react";
import "./Categories.css";
import Carousel from "react-multi-carousel"; // Importing the Carousel component
import "react-multi-carousel/lib/Carousel"; // Importing Carousel styles

export default function Categories(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const categoriesDetails = props.categories.map((category) => (
    <div key={category.name} className="category">
      <img src={category.icon} alt={category.name} className="category-icon" />
      <p className="category-name"> {category.name}</p>
    </div>
  ));

  return (
    <div className="category-block">
      <div className="part-one">
        <div className="red-box"></div>
        <div className="red-sale-heading">Categories</div>
      </div>
      <div className="part-two">
        <div className="flash-sale-heading">Browse By Category </div>
      </div>
      <div className="categories-tab">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          autoPlay={props.deviceType !== "mobile"}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {categoriesDetails}
        </Carousel>
      </div>
    </div>
  );
}
