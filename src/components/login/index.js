import React from "react";
import AuthForm from "../authForm/index";

const Login = (props) => {
  return (
    <>
      <div>
        <AuthForm
          title="Login Into Existing Account"
          buttonLabel="Login"
          formType="login"
        />
      </div>
    </>
  );
};

export default Login;
