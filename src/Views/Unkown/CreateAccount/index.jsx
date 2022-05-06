import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import SquaredInput from "../../../Components/SquaredInput";
import { useHistory } from "react-router-dom";
import LoginTemplate from "../../../Components/LoginTemplate";
import { useRef } from "react";
import { useEffect } from "react";
import { CHECK_EMAIL, CHECK_USERNAME, CREATE_ACCOUNT } from "./Api";
function CreateAccount() {
  const { t, i18n } = useTranslation();
  const defualtvalues = useRef({
    CPassword: "",
    Username: "",
    Password: "",
    Email: "",
  });
  const [error, seterror] = useState({});
  const [text, settext] = useState("");
  const [values, setvalues] = useState(defualtvalues.current);
  let history = useHistory();
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const CheckEmail = useCallback(
    async (e) => {
      if (!validateEmail(values.email)) {
        seterror({ ...error, Email: t("mail is not valid") });
        return;
      }
      await CHECK_EMAIL(values)
        .then((res) => {
          seterror({ ...error, Email: "" });
        })
        .catch(() => {
          seterror({ ...error, Email: t("e-mail has been taken") });
        });
    },
    [values, error, t]
  );
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const CheckUsername = useCallback(
    async (e) => {
      await CHECK_USERNAME(values)
        .then((res) => {
          seterror({ ...error, Username: "" });
        })
        .catch(() => {
          seterror({
            ...error,
            Username: values.username.includes(" ")
              ? t("Invalid username")
              : t("username has been taken"),
          });
        });
    },
    [values, error, t]
  );

  const submit = async (e) => {
    e.preventDefault();
    var cc = {};
    for (const property in values)
      if (!values[property] && !error) cc[property] = "required input";
    if (error.Username || error.Email || error.CPassword) {
      return;
    }
    seterror(cc);
    await CREATE_ACCOUNT(values)
      .then((res) => {
        settext(t("YOUR EMAIL BEEN CONFIRMED SUCCESSFULLY"));
      })
      .catch(() => {});
  };

  return (
    <LoginTemplate>
      {text ? (
        <h1>{text}</h1>
      ) : (
        <>
          <form onSubmit={submit}>
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

            <SquaredInput
              label={t("Full Name")}
              handleChange={handleChange}
              name="FullName"
              value={values["FullName"]}
              required
              errorMessage={error.FullName}
            />
            <SquaredInput
              label={t("Username")}
              handleChange={handleChange}
              name="Username"
              required
              value={values["Username"]}
              errorMessage={error["Username"]}
              onBlur={CheckUsername}
            />
            <SquaredInput
              label={t("Email")}
              handleChange={handleChange}
              name="Email"
              required
              value={values["Email"]}
              errorMessage={error.Email}
              onBlur={CheckEmail}
            />
            <SquaredInput
              label={t("Password")}
              handleChange={handleChange}
              name="Password"
              value={values["Password"]}
              errorMessage={error.Password}
            />
            <SquaredInput
              label={t("Confirm Password")}
              handleChange={handleChange}
              name="CPassword"
              value={values["CPassword"]}
              errorMessage={error.CPassword}
              onBlur={() =>
                values.password !== values.CPassword
                  ? seterror((prev) => ({
                      ...prev,
                      CPassword: "required input",
                    }))
                  : seterror((prev) => ({ ...prev, CPassword: "" }))
              }
            />
            <button
              type="submit"
              className="btn btn-primary log-in-bootstrap-button"
            >
              {t("Create")}
            </button>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between ",
              paddingTop: "20px",
            }}
          >
            <div></div>
            <div
              onClick={() => history.push("/log-in")}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <p className="underline-text-hover">
                {t("Already have an account")}
              </p>
            </div>
          </div>
        </>
      )}
    </LoginTemplate>
  );
}

export default CreateAccount;
