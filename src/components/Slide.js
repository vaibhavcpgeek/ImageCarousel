import React from "react";

const Slide = ({ src }) => {
  return (
    <li className="carousel_item">
      <img src={src} alt="" />
    </li>
  );
};

export default Slide;
