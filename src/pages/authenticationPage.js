import React from "react";
import LoginForm from "../components/loginForm/index";
import RegisterForm from "../components/registerForm/index";
const AuthenticationPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default AuthenticationPage;
