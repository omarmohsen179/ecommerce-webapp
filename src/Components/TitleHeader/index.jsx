import React from "react";
import { useTranslation } from "react-i18next";


function TitleHeader({title,details,shaded}) {
  const { t, i18n } = useTranslation();
  return (

      <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
    <header class="w3-container w3-center w3-padding-32"> 
        <h1><b>{title}</b></h1>
        <p>{details ??details} <span class="w3-tag">{shaded ??shaded}</span></p>
        </header>

    </div>
  );
}

export default TitleHeader;
