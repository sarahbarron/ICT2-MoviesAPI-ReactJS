import React from "react";
import AuthForm from "../authForm/index";

const Register = (props) => {
  return (
    <div>
      <AuthForm
        title="Register New Account"
        buttonLabel="Register Now"
        formType="register"
      />
    </div>
  );
};

export default Register;
