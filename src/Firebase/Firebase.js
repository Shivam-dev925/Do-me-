import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2aSb9bxd0stGM6pdtzx68I2_LS3WsFd0",
  authDomain: "do-me-77729.firebaseapp.com",
  projectId: "do-me-77729",
  storageBucket: "do-me-77729.appspot.com",
  messagingSenderId: "380419089299",
  appId: "1:380419089299:web:9dabbbd9f5bfc42fc77e66",
};

const FirebaseData = firebase.initializeApp(firebaseConfig);

const Database = FirebaseData.firestore();
export const Auth = FirebaseData.auth();

export { Database };
