import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../../Components/ButtonComponent";
import LoginTemplate from "../../../Components/LoginTemplate";
import SquaredInput from "../../../Components/SquaredInput";
import { CheckInputs } from "../../../Service/SharedApi/SharedFunctions";
function Login() {
  const { t, i18n } = useTranslation();
  const defualtvalues = useRef({
    Password: "",
    UsernameOrEmail: "",
  });
  const [loading, setloading] = useState(false);
  const [values, setvalues] = useState(defualtvalues.current);
  const [error, seterror] = useState({});
  let history = useHistory();
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    seterror(CheckInputs(values, error));
    if (Object.keys(CheckInputs(values, error)).length > 0) {
      return;
    }
    setloading(true);
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
            {t("Log in to your account")}
          </div>

          <SquaredInput
            label={"Username or E-mail"}
            handleChange={handleChange}
            name="UsernameOrEmail"
            value={values["UsernameOrEmail"]}
            required
            errorMessage={error.UsernameOrEmail}
            onBlur={() => seterror(CheckInputs(values, error))}
          />
          <SquaredInput
            label={"Password"}
            handleChange={handleChange}
            name="Username"
            required
            value={values["Username"]}
            errorMessage={error["Username"]}
            onBlur={() => seterror(CheckInputs(values, error))}
          />
          <ButtonComponent
            disable={
              Object.keys(error)
                .map((key, index) => error[key] !== "")
                .filter((e) => e).length > 0 || !values
            }
            title="Log In"
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
          <div onClick={() => history.push("/forget-password")}>
            <p className="underline-text-hover"> {t("Forgot password?")}</p>
          </div>
          <div
            onClick={() => history.push("/create-account")}
            style={{ display: "flex", justifyContent: "end" }}
          >
            <p className="underline-text-hover">{t("Create an account")}</p>
          </div>
        </div>
      </div>
    </LoginTemplate>
  );
}

export default Login;
