import React, { useContext } from "react";

import { createContext, useState } from "react";
import { controlContext } from "./ControlContext";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isRegister, setIsRegister] = useState(false);
  const [userReadyToSeeSummary, setUserReadyToSeeSummary] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      <authContext.Provider
        value={{
          isRegister,
          setIsRegister,
          userReadyToSeeSummary,
          setUserReadyToSeeSummary,
          isFinish,
          setIsFinish,
          isConfirmed,
          setIsConfirmed,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
}
