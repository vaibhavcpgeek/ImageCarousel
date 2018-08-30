import React from "react";

const Arrow = ({ dir, handleClick }) => {
  return (
    <div className={`carousel_arrow ${dir}`} onClick={handleClick}>
      <img src="images/arrow.svg" alt="" />
    </div>
  );
};

export default Arrow;
