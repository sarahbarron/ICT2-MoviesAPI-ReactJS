import firebase from "firebase/app";
// for the database
import "firebase/firestore";
// for the auth
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

console.log(config);
firebase.initializeApp(config);

// configuring the firebase for google auth

// we need to export these out so it can
// be used anywhere we need authentication or the db
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
//  this takes some custom parameters - always trigger the google popup
provider.setCustomParameters({ prompt: "select_account" });

// signInWithPopUp can be used for many providers but we are passing
// in the Google provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
