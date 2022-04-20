import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
function SquaredInput({ label, name, value, type = "text" }) {
  const { t, i18n } = useTranslation();
  return (
    <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
      <div className="squared-input-container">
        <label id="domain-label">{label}</label>
        <input type={type} name={name} value={value} />
      </div>
    </div>
  );
}

export default SquaredInput;
