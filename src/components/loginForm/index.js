import React, { useState, useContext } from "react";
import "./loginForm.css";
import { signInWithGoogle, auth } from "../../firebase/firebase-utils";
import useForm from "react-hook-form";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const LoginForm = ({ props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const [submitError, setSubmitError] = useState("");
  const [toHome, setToHome] = useState(false);
  const context = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      if (user !== null || user !== "undefined") {
        authenticated(user);
      } else {
        context.updateUser(null);
      }
    } catch (e) {
      setSubmitError("Invalid e-mail address or password entered");
      console.log("Error Logging in : ", e);
    }
  };

  const onSubmitGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();
      if (user !== null || user !== "undefined") {
        authenticated(user);
      } else context.updateUser(null);
    } catch (error) {
      setSubmitError(error);
      console.log("Error signing in with Google Auth: ", error);
    }
  };

  const authenticated = (user) => {
    context.updateUser(user);
    setEmail("");
    setPassword("");
    setToHome(true);
  };

  if (toHome === true) {
    return <Redirect to="/movies" />;
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <div className="form-group">
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => onChangeHandler(event)}
          ref={register({ required: "Email address required" })}
        />
      </div>
      {errors.userEmail && (
        <p className=" text-white">{errors.email.message} </p>
      )}
      <div className="form-group">
        <label htmlFor="userPassword">Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => onChangeHandler(event)}
          ref={register({ required: "Password required" })}
        />
      </div>
      {errors.userPassword && (
        <p className="text-white">{errors.userPassword.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Login
      </button>

      <button
        type="button"
        onClick={onSubmitGoogle}
        className="btn btn-primary"
      >
        Sign In With Google
      </button>
      <p className="text-white">{submitError} </p>
    </form>
  );
};

export default LoginForm;
