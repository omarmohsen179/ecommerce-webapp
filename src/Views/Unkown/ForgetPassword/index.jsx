import React from "react";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../Components/SquaredInput";

function ForgetPassword() {
  const { t, i18n } = useTranslation();
  return (
    <div className="login-container">
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
      </div>
    </div>
  );
}

export default ForgetPassword;
