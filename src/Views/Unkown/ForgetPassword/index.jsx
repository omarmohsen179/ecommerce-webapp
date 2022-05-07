import React from "react";
import { useTranslation } from "react-i18next";
import LoginTemplate from "../../../Components/LoginTemplate";
import SquaredInput from "../../../Components/SquaredInput";
import { RESET_PASSWORD_REQUEST } from "./Api";
import { useState } from "react";
import { useCallback } from "react";
import { validateEmail } from "../../../Service/SharedApi/SharedFunctions";
import { CHECK_EMAIL } from "../CreateAccount/Api";
import ButtonComponent from "../../../Components/ButtonComponent";
function ForgetPassword() {
  const { t, i18n } = useTranslation();
  let [text, settext] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const [values, setvalues] = useState("");
  let submit = useCallback(
    async (e) => {
      e.preventDefault();
      await RESET_PASSWORD_REQUEST({
        values,
      })
        .then((res) => {
          settext(res);
        })
        .catch(() => {
          settext("error in info try again");
        });
    },
    [t]
  );
  const CheckEmail = useCallback(
    async (e) => {
      if (!validateEmail(e)) {
        seterror("mail is not valid");
        return;
      }
      setloading(true);
      await CHECK_EMAIL(values)
        .then((res) => {
          setloading(false);
          seterror("");
        })
        .catch(() => {
          setloading(false);

          seterror("cannot find this mail, you can create account");
        });
    },
    [values, error, t]
  );
  return (
    <LoginTemplate>
      {Text ? (
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            paddingTop: "20px",
            paddingBottom: "20px",
            color: text,
          }}
        >
          {t(Text)}
        </div>
      ) : (
        <form onSubmit={submit}>
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
          <SquaredInput
            label={"E-mail"}
            handleChange={(e) =>
              setvalues(e.target.value) & CheckEmail(e.target.value)
            }
            name="Email"
            required
            value={values["Email"]}
            errorMessage={error}
          />
          <ButtonComponent
            disable={error || !values}
            title="Reset Password"
            type={"submit"}
            loading={loading}
          />
        </form>
      )}
    </LoginTemplate>
  );
}

export default ForgetPassword;
