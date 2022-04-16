import React from "react";
import "./ButtonComponent.css";
const ButtonComponent = ({ Text }) => {
  return (
    <div>
      <button className="site-button-component">{Text}</button>
    </div>
  );
};

export default ButtonComponent;
