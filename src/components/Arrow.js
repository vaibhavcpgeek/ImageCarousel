import React from "react";

const Arrow = ({ dir, handleClick }) => {
  return (
    <div className={`carousel_arrow ${dir}`} onClick={handleClick}>
      <img
        src="https://uploads.codesandbox.io/uploads/user/6b511b37-05c4-4463-bed5-676b296da7f2/i06_-arrow.svg"
        alt=""
      />
    </div>
  );
};

export default Arrow;
