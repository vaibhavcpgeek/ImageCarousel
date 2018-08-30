import React from "react";

const Slide = ({ src, isActive }) => {
  return (
    <li className={`carousel_item ${isActive ? "active" : "inactive"}`}>
      <img src={src} alt="" />
    </li>
  );
};

export default Slide;
