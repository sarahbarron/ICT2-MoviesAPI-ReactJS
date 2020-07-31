import React, { useState, useContext, memo } from "react";
import useForm from "react-hook-form";
import {
  auth,
  signInWithGoogle,
  firestoreCreateUserDocument,
} from "../../api/firebase-utils";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import CustomButton from "../buttons/customButton";
import "./authForm.css";

const AuthForm = ({ title, buttonLabel, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const [submitError, setSubmitError] = useState("");
  const [toHome, setToHome] = useState(false);
  const context = useContext(AuthContext);

  //   When a user chooses to submit using email and password
  const onSubmit = async (data) => {
    try {
      // if the user is registering an account
      if (formType === "register") {
        const { user } = await auth.createUserWithEmailAndPassword(
          data.email,
          data.password
        );
        firestoreCreateUserDocument(user);
        authenticated(user);
      }
      //   if the user is logging into a registered account
      else if (formType === "login") {
        const { user } = await auth.signInWithEmailAndPassword(
          data.email,
          data.password
        );
        authenticated(user);
      }
    } catch (e) {
      setSubmitError(e.message);
      setEmail("");
      setPassword("");
      console.log("Error Signing up with email and password: ", e);
    }
  };

  //   when the user is typing into the form input fields
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    try {
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    } catch (e) {
      console.log("error with onChangeHandler: ", e);
    }
  };

  //   method for registering or logging in with firebase and google
  const onSubmitGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();

      if (user !== null || user !== "undefined") {
        authenticated(user);
      } else context.setUser(null);
      //    if the user is not stored in the database store it
      firestoreCreateUserDocument(user);
    } catch (error) {
      setSubmitError(error);
      setEmail("");
      setPassword("");
      console.log("Error signing in with Google Auth: ", error);
    }
  };

  //   After a user has been authenticated set the state
  // values back to blank and ToHome to True
  const authenticated = (user) => {
    try {
      context.setUser(user);
      setEmail("");
      setPassword("");
      setToHome(true);
    } catch (e) {
      console.log(
        "Error trying to reset state variable in after authentication: ",
        e
      );
    }
  };

  //  if toHome is true (i.e the user is authenticated)
  // redirect to the home page
  if (toHome === true) {
    try {
      return <Redirect to="/" />;
    } catch (e) {
      console.log("Error redirecting from authentication to movies page: ", e);
    }
  }

  //   The Registration / Login Form
  return (
    <>
      <form
        className="form bg-dark text-light"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>{title}</h3>

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
            autoFocus
          />
        </div>
        {errors.email && <p className=" text-white">{errors.email.message} </p>}
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
        {errors.password && (
          <p className="text-white">{errors.password.message} </p>
        )}

        {/* Button for register/login with email and password */}
        <CustomButton
          onClick={(event) => {
            handleSubmit(event, email, password);
          }}
          className="btn btn-primary space-between"
        >
          {buttonLabel}
        </CustomButton>
        {/* Button for register/login with google using firebase  */}
        <CustomButton
          type="button"
          onClick={onSubmitGoogle}
          className="btn btn-primary space-between"
        >
          Sign In With Google
        </CustomButton>

        <p className="text-white">{submitError} </p>
      </form>
    </>
  );
};

export default memo(AuthForm);
