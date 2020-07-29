import React from "react";
import AuthForm from "../authForm/index";

const Register = () => {
  return (
    <div>
      <AuthForm
        title="Register Account"
        buttonLabel="Register Now"
        formType="register"
      />
    </div>
  );
};

export default Register;
