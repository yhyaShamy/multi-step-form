import { createContext, useState } from "react";
import React from "react";

export const controlContext = createContext();

export default function ControlContextProvider({ children }) {
  const [prevControl, setPrevControl] = useState(null);
  const [nextControl, setNextControl] = useState(null);
  const [sideBarLink, setSideBarLink] = useState(null);
  return (
    <>
      <controlContext.Provider
        value={{
          prevControl,
          nextControl,
          setPrevControl,
          setNextControl,
          sideBarLink,
          setSideBarLink,
        }}
      >
        {children}
      </controlContext.Provider>
    </>
  );
}
