import firebase from "firebase/app";
// for the database
import "firebase/firestore";
// for the auth
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

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

// signInWithPopUp can be used for many providers but I am using the Google provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestoreCreateUserDocument = async (userAuth) => {
  // if a user is not authenticated return without doing anything
  if (!userAuth) return;

  // get the document user reference from firestore using the users uid
  const userDocumentReference = firestore.doc(`users/${userAuth.uid}`);

  // API call to get the Document Snapshot object using the user reference
  // the snapshot object has a boolean value property exists that tells
  // you if the user exists or not
  const documentSnapshot = await userDocumentReference.get();

  // if the user does not exist already in the DB save it to the DB
  if (!documentSnapshot.exists) {
    const { email } = userAuth;
    console.log("Email : ", email);
    try {
      // create a user document in the DB with
      // the users display name, email and any additional data
      await userDocumentReference.set({
        email,
      });
    } catch (error) {
      console.log(
        "error while trying to create user in firestorm: ",
        error.message
      );
    }
  }
  return userDocumentReference;
};
export default firebase;
