import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const firebaseInitialition = () => {
  initializeApp(firebaseConfig);
};
export default firebaseInitialition;
