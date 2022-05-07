import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CONFIRM } from "./Api";

import { useTranslation } from "react-i18next";

import queryString from "query-string";
import LoginTemplate from "../../../Components/LoginTemplate";
function EmailConfirmation(props) {
  const { t, i18n } = useTranslation();
  let [text, settext] = useState("");
  let submit = useCallback(
    async (e) => {
      await CONFIRM(e)
        .then(() => {
          settext(t("YOUR EMAIL BEEN CONFIRMED SUCCESSFULLY"));
        })
        .catch(() => {
          settext(t("ERROR IN INFO TRY AGAIN"));
        });
    },
    [t]
  );

  useEffect(() => {
    let value = queryString.parse(props.location.search);
    console.log(value);
    if (value.token && value.username) {
      submit({
        token: value.token,
      });
    }
  }, [props.location.search, submit]);

  return (
    <LoginTemplate>
      <div
        className="loginWidnow"
        style={{
          direction: i18n.language === "en" ? "ltr" : "rtl",
          textAlign: "center",
        }}
      >
        <h1>{text}</h1>
        <div className="w-100 d-flex justify-content-center">
          <Link to="/Log-In" className="btn CreateAnAccountButton">
            {t("Log In")}
          </Link>
        </div>
      </div>
    </LoginTemplate>
  );
}

export default EmailConfirmation;
