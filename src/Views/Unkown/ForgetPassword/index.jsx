import React from "react";
import { useTranslation } from "react-i18next";
import LoginTemplate from "../../../Components/LoginTemplate";
import SquaredInput from "../../../Components/SquaredInput";

function ForgetPassword() {
  const { t, i18n } = useTranslation();
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
            {t("Forget password")}
          </div>
          <SquaredInput label={t("Email")} />

          <button
            type="button"
            className="btn btn-primary log-in-bootstrap-button"
          >
            {t("Send")}
          </button>
        </div>
      </div>
    </LoginTemplate>
  );
}

export default ForgetPassword;
