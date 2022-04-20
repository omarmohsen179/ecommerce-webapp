import React from "react";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../Components/SquaredInput";
import queryString from "query-string";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
function ResetPassword({ props }) {
  let history = useHistory();

  useEffect(() => {
    let value = queryString.parse(props.location.search);
    if (!value) {
      history.push("/");
    }
  }, []);
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
              {t("Reset password")}
            </div>
            <SquaredInput label={t("New password")} type={"password"} />
            <SquaredInput label={t("Confirm Password")} type={"password"} />
            <button
              type="button"
              className="btn btn-primary log-in-bootstrap-button"
            >
              {t("Send")}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between ",
              paddingTop: "20px",
            }}
          >
            <div>
              <p className="underline-text-hover">Forgot Password</p>
            </div>
            <div>
              <p className="underline-text-hover">Create Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
