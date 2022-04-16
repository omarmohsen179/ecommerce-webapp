import React from "react";
import SquaredInput from "../../../Components/SquaredInput";

import "./style.css";
function Login() {
  return (
    <div className="login-container">
      <div
        className="login-form-window"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <label class="login-Redio-box-container">
              <p className="underline-text-hover">Hosting Login</p>
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="login-Redio-box-container">
              <p className="underline-text-hover">Webmail Login</p>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Log in to your account
            </div>
            <SquaredInput label={"Email or Domain Name"} />
            <SquaredInput label={"Password"} type={"password"} />
            <button
              type="button"
              className="btn btn-primary log-in-bootstrap-button"
            >
              Log In
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

export default Login;
