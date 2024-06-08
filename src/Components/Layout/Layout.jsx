import React, { useContext, useEffect } from "react";
import style from "./Layout.module.scss";
import responseStyle from "./Layout.media.module.scss";
import { Link, Outlet } from "react-router-dom";
import { controlContext } from "../Context/ControlContext";
import SideBar from "../SideBar/SideBar";
import { authContext } from "../Context/AuthContext";
import { plansContext } from "../Context/plansContext";

export default function Layout() {
  const { prevControl, nextControl, sideBarLink, setNextControl } =
    useContext(controlContext);
  const {
    userReadyToSeeSummary,
    setIsFinish,
    isConfirmed,
    setUserReadyToSeeSummary,
    setIsRegister,
    setIsConfirmed,
  } = useContext(authContext);
  const { setSelectedAddPlans, setSelectedPlan, setmyAddPlan, setprevChecked } =
    useContext(plansContext);

  useEffect(() => {}, []);
  console.log(" Layout :  ", nextControl, isConfirmed);
  return (
    <>
      <div
        className={`mx-auto my-5  ${style.myContainer} ${responseStyle.myContainer}`}
      >
        <div
          className={`row postion-relative shadow-lg rounded-3 p-4 ${responseStyle.box}`}
        >
          <div className={`col-sm-4 ${responseStyle.sideBarBox}`}>
            <SideBar />
          </div>
          <div
            className={`col-sm-8 rounded-3 ${style.contentBox} ${responseStyle.contentBox} `}
          >
            <div
              className={`h-100 position-relative ${responseStyle.fullWidth}`}
            >
              <Outlet />
              <div
                className={`d-flex justify-content-between position-absolute ${style.control} ${responseStyle.control} align-items-center w-100 `}
              >
                {prevControl ? (
                  <Link className="text-decoration-none" to={prevControl}>
                    <p
                      className={`mb-0 fs-4 fw-bold gray-text ${style.prevControl}`}
                    >
                      Go Back
                    </p>
                  </Link>
                ) : (
                  <span></span>
                )}

                {userReadyToSeeSummary &&
                sideBarLink == "summary" &&
                !isConfirmed &&
                nextControl ? (
                  <Link className="text-decoration-none" to="/thankYou">
                    <button
                      className={`border-0 rounded-3 ${style.confirmBtn} text-white fs-4 px-4 py-3`}
                      onClick={() => {
                        setIsFinish(true);
                        setUserReadyToSeeSummary(false);
                        setIsRegister(false);
                        setmyAddPlan([]);
                        setSelectedPlan(null);
                        setSelectedAddPlans([]);
                        setNextControl(null);
                        setprevChecked(null);
                      }}
                    >
                      Confirm
                    </button>
                  </Link>
                ) : (
                  <>
                    {nextControl && !isConfirmed ? (
                      <Link className="text-decoration-none" to={nextControl}>
                        <button
                          className={`border-0 rounded-3 ${style.nextControl} text-white fs-4 px-4 py-3`}
                        >
                          Next Step
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
