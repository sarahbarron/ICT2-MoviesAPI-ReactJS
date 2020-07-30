import React from "react";
import Login from "../login/index";
import Register from "../register/index";
import Welcome from "../welcome/index";
import "./auth-page.css";

const TemplateAuthPage = (props) => {
  return (
    <>
      <div id="auth-container" className="container">
        <div className="row">
          <div className="col">
            <Welcome />
          </div>
        </div>
        <div className="row">
          <div id="register-form" className="col-sm auth-forms">
            <Register />
          </div>
          <div id="login-form" className="col-sm auth-forms">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateAuthPage;
