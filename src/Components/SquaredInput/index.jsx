import React from "react";
import "./style.css";
function SquaredInput({ label, name, value, type = "text" }) {
  return (
    <div>
      <div className="squared-input-container">
        <label id="domain-label">{label}</label>
        <input type={type} name={name} value={value} />
      </div>
    </div>
  );
}

export default SquaredInput;
