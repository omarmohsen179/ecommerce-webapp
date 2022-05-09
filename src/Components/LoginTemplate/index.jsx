import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import "./style.css";
function LoginTemplate({ children }) {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  return (
    <div
      className="login-container"
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <div
        className="login-form-window"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LoginTemplate;
