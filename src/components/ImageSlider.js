import React from "react";
import Slide from "./Slide";

const ImageSlider = ({ images, currentIndex }) => {
  const listItems = images.map((image, index) => (
    <Slide
      key={image.id}
      src={image.webformatURL}
      isActive={currentIndex === index}
    />
  ));
  return <ul className="carousel_wrapper">{listItems}</ul>;
};

export default ImageSlider;
