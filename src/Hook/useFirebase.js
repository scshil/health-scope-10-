import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseInitialition from "../Firebase/firebseInit";
firebaseInitialition();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error1, setError1] = useState("");
  const Auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //   function for google sign in
  const signInWithGoogle = () => {
    signInWithPopup(Auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError1(error);
      });
  };
  //   function for logout
  const logOut = () => {
    signOut(Auth).then(() => {
      setUser({});
    });
  };
  //   track user
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // submit Login

  // create new User
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
    e.preventDefault();
  };
  const passwordInput = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    e.preventDefault();
  };
  const registrationBtn = (e) => {
    createUserWithEmailAndPassword(Auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError1(error);
      });
    console.log(user);
    e.preventDefault();
  };

  // login Btn
  const loginBtn = () => {
    signInWithEmailAndPassword(Auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError1(error);
      });
    setEmail("");
    setPassword("");
  };
  return {
    logOut,
    user,
    error1,
    email,
    signInWithGoogle,

    emailInput,
    passwordInput,
    registrationBtn,
    loginBtn,
  };
};
export default useFirebase;
