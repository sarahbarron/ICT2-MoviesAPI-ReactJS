import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const PrivateRoute = (props) => {
  const context = useContext(AuthContext);

  // Destructure props from <privateRoute>
  const { component: Component, ...rest } = props;
  console.log("private router user: ", context.user);

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
