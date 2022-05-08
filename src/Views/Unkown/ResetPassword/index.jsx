import React from "react";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../Components/SquaredInput";
import queryString from "query-string";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginTemplate from "../../../Components/LoginTemplate";
import useQuery from "../../../Components/useQuery";
import ButtonComponent from "../../../Components/ButtonComponent";
import { useState } from "react";
import { CheckInputs } from "../../../Service/SharedApi/SharedFunctions";
import { useCallback } from "react";
import { RESET_PASSWORD } from "./Api";
function ResetPassword({ props }) {
  const [error, seterror] = useState({});
  const [Text, settext] = useState("");
  const [loading, setloading] = useState(false);
  const [values, setvalues] = useState({ CPassword: "", Password: "" });
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const handleChange = useCallback(
    (e) => setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    []
  );
  useEffect(() => {
    let value = queryString.parse(props.location.search);
    if (!value.token) {
      history.push("/");
    }
    setvalues({ ...values, token: value.token });
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    seterror(CheckInputs(values, error));
    if (Object.keys(CheckInputs(values, error)).length > 0) {
      return;
    }
    setloading(true);
    await RESET_PASSWORD(values)
      .then((res) => {
        settext("your e-mail been confirmed successfully");
        setloading(false);
      })
      .catch(() => {});
  };
  return (
    <LoginTemplate>
      <div>
        <form onSubmit={submit}>
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
          <SquaredInput
            label={"Password"}
            handleChange={handleChange}
            name="Password"
            value={values["Password"]}
            errorMessage={error.Password}
            onBlur={CheckInputs(values, error)}
          />
          <SquaredInput
            label={"Confirm Password"}
            handleChange={handleChange}
            name="CPassword"
            value={values["CPassword"]}
            errorMessage={error.CPassword}
            onBlur={(e) =>
              seterror((prev) => ({
                ...prev,
                CPassword:
                  values.Password === e.target.value
                    ? ""
                    : "does not match the password",
              }))
            }
          />
          <ButtonComponent
            disable={
              Object.keys(error)
                .map((key, index) => error[key] !== "")
                .filter((e) => e).length > 0 || !values
            }
            title="Create"
            type={"submit"}
            loading={loading}
          />
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between ",
            paddingTop: "20px",
          }}
        >
          <div></div>
          <div>
            <p className="underline-text-hover">{t("Create Account")}</p>
          </div>
        </div>
      </div>
    </LoginTemplate>
  );
}

export default ResetPassword;
