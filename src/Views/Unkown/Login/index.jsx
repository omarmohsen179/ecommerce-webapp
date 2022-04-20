import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import SquaredInput from "../../../Components/SquaredInput";

import "./style.css";
function Login() {
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
        <div>
          <div>
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              {t("Log in to your account")}
            </div>
            <SquaredInput label={"Username or Email"} />
            <SquaredInput label={"Password"} type={"password"} />
            <button
              type="button"
              className="btn btn-primary log-in-bootstrap-button"
            >
              {t("Log in")}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between ",
              paddingTop: "20px",
            }}
          >
            <div onClick={() => history.push("/forget-password")}>
              <p className="underline-text-hover"> {t("Forgot Password")}</p>
            </div>
            <div onClick={() => history.push("/create-account")}>
              <p className="underline-text-hover">{t("Create Account")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
