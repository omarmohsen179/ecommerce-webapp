import React from "react";
import "./Image.css";
const Image = ({ src, className }) => {
  return (
    <div
      className={"image-cover-style " + className}
      style={{ backgroundImage: "url(" + src + ")" }}
    >
      <div className={"image-layer"}></div>
    </div>
  );
};

export default Image;
