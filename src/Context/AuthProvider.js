import React, { createContext } from "react";
import useFirebase from "../Hook/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>
      {/* <br /> */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
