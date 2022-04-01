import { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "../../Firebase/Firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateCurrentUser,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const GoogleSignIn = () => {
    const Google = new GoogleAuthProvider();
    return signInWithPopup(Auth, Google)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        SignUp,
        GoogleSignIn,
        showError,
        setShowError,
        error,
        setError,
        SignIn,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const UseAuth = () => useContext(AuthContext);
