import React, { useContext, useEffect } from "react";
import { authContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { controlContext } from "../Context/ControlContext";
import thankYouImage from "../../assets/images/icon-thank-you.svg";
import "./ThanYou.module.scss";

export default function ThankYou() {
  const { isFinish, setIsConfirmed } = useContext(authContext);
  const { setSideBarLink, setPrevControl } = useContext(controlContext);

  useEffect(() => {
    setSideBarLink("summary");
    setIsConfirmed(true);
    setPrevControl(null);
  }, []);

  if (!isFinish) {
    return <Navigate to="/summary" />;
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="text-center py-5">
          <img src={thankYouImage} alt="Thank you" />
          <h2 className="my-4 fw-bold primary-text">Thank you!</h2>
          <p className="mb-0 fs-5 gray-text">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </>
  );
}
