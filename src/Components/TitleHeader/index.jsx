import React from "react";
import { useTranslation } from "react-i18next";
import { text } from "../../styles/constant";

function TitleHeader({ title, details, shaded }) {
  const { t, i18n } = useTranslation();
  return (
    <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
      <header className="w3-container w3-center w3-padding-32">
        <h1 style={{ color: text }}>
          <b>{title}</b>
        </h1>
        <p>
          {details ?? details}{" "}
          <span className="w3-tag" style={{ backgroundColor: text }}>
            {shaded ?? shaded}
          </span>
        </p>
      </header>
    </div>
  );
}

export default TitleHeader;
