import React from "react";
import ReactDOM from "react-dom";
import Slide from "./Slide";

const ImageSlider = ({ images }) => {
  const listItems = images
    .slice(0, 5)
    .map(image => <Slide key={image.id} src={image.webformatURL} />);
  return <ul className="carousel_wrapper">{listItems}</ul>;
};

export default ImageSlider;
