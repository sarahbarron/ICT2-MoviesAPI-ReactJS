import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-utils";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      console.log("userAuth : ", userAuth);
    });

    // when a user closes app without logging out
    // they are automatically logged out here on
    // unMount
    // return async () => {
    //   await auth().signOut();
    // };
  }, []);

  const updateUser = (user) => {
    setUser(user);
    console.log("update user to: ", user);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        updateUser: updateUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
