import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import LoginTemplate from "../../../Components/LoginTemplate";
import SquaredInput from "../../../Components/SquaredInput";
function Login() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  return (
    <LoginTemplate>
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
          <SquaredInput label={t("Username or Email")} />
          <SquaredInput label={t("Password")} type={"password"} />
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
          <div
            onClick={() => history.push("/create-account")}
            style={{ display: "flex", justifyContent: "end" }}
          >
            <p className="underline-text-hover">{t("Create Account")}</p>
          </div>
        </div>
      </div>
    </LoginTemplate>
  );
}

export default Login;
