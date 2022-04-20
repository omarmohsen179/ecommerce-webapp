import React from "react";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../Components/SquaredInput";
import { useHistory } from "react-router-dom";
function CreateAccount() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
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
              {t("Create new account")}
            </div>
            <SquaredInput label={t("First Name")} />
            <SquaredInput label={t("Last Name")} />
            <SquaredInput label={t("Username")} />
            <SquaredInput label={t("Email")} />
            <SquaredInput label={t("Password")} />
            <SquaredInput label={t("Confirm Password")} />
            <button
              type="button"
              className="btn btn-primary log-in-bootstrap-button"
            >
              {t("Create")}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between ",
              paddingTop: "20px",
            }}
          >
            <div></div>
            <div onClick={() => history.push("/log-in")}>
              <p className="underline-text-hover">
                {t("Already have an account")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
