import React from "react";
import Login from "../components/login/index";
import Register from "../components/register/index";
const AuthenticationPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Register />
    </div>
  );
};

export default AuthenticationPage;
