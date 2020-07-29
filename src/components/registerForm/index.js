import React, { useState, useContext } from "react";
import useForm from "react-hook-form";
import {
  auth,
  signInWithGoogle,
  firestoreCreateUserDocument,
  firestore,
} from "../../firebase/firebase-utils";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const [submitError, setSubmitError] = useState("");
  const [toHome, setToHome] = useState(false);
  const context = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      if (user !== null || user !== "undefined") {
        authenticated(user);
      }
      firestoreCreateUserDocument(user);
    } catch (e) {
      setSubmitError(e.message);
      console.log("Error Signing up with email and password: ", e);
    }
  };

  const onSubmitGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();

      if (user !== null || user !== "undefined") {
        authenticated(user);
      } else context.updateUser(null);
      firestoreCreateUserDocument(user);
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
      <h3>Register</h3>
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

      <button
        onClick={(event) => {
          handleSubmit(event, email, password);
        }}
        className="btn btn-primary"
      >
        Register
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

export default RegisterForm;
