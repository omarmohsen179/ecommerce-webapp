import React from "react";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../Components/SquaredInput";
import queryString from "query-string";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginTemplate from "../../../Components/LoginTemplate";
import useQuery from "../../../Components/useQuery";
function ResetPassword({ props }) {
  let history = useHistory();
  let query = useQuery();
  useEffect(() => {
    const querydata = {
      search: query.get("q"),
      category: query.get("c"),
    };
    console.log(querydata);
    let value = queryString.parse(props.location.search);
    if (!value) {
      history.push("/");
    }
  }, []);
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
    </LoginTemplate>
  );
}

export default ResetPassword;
