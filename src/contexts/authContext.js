import React, { createContext, useEffect, useState } from "react";
import { auth } from "../api/firebase-utils";
import { Redirect } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  // on mount and dismount use firebase's onAuthStateChanged method
  // to check if the user is still logged in and authenticated.
  // set the apps user to the userAuth which will be
  // either the authenticated user or null if there is nobody authenticated.
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      console.log("userAuth : ", userAuth);
    });
  }, []);

  const logout = async () => {
    try {
      setUser(null);
      await auth.signOut();
      return <Redirect to="/authenticate" />;
    } catch (e) {
      console.log("error while trying to log out: ", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
