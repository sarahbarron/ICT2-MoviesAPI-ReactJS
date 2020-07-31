import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { auth } from "../api/firebase-utils";

const PrivateRoute = (props) => {
  const context = useContext(AuthContext);

  auth.onAuthStateChanged((userAuth) => {
    context.setUser(userAuth);
    console.log("Private Route userAuth : ", userAuth);
  });

  // Destructure props from <privateRoute>
  const { component: Component, ...rest } = props;
  console.log("private router user: ", context.user);
  console.log("location: ", props.location);
  return context.user !== null ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/authenticate",
        state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;
