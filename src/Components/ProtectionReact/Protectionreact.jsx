import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

export default function ProtectingReact({ children }) {
  const { isRegister } = useContext(authContext);
  console.log("from protection", isRegister);
  if (isRegister) {
    return children;
  } else {
    return <Navigate to="/userinfo" />;
  }
}
