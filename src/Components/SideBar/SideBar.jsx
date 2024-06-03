import React, { useContext, useEffect } from "react";
import { controlContext } from "../Context/ControlContext";
import { Link } from "react-router-dom";
import $ from "jquery";
import sideBarStyles from "./SideBar.module.scss";
import sideBarResponseStyles from "./SideBar.media.module.scss";

export default function SideBar() {
  const pathName = useContext(controlContext).sideBarLink;
  if (pathName) {
    $("a").children("li").children("span").removeClass(sideBarStyles.active);
    $("#" + pathName).addClass(sideBarStyles.active);
  }

  return (
    <>
      <ul
        className={`p-4 list-unstyled bg-primary rounded-3 d-flex flex-column gap-5 ${sideBarStyles.sideBarBg} ${sideBarResponseStyles.sideBar} h-100`}
      >
        <Link
          className=" text-decoration-none text-white step-link"
          to="/userinfo"
        >
          <li className="d-flex align-items-center gap-4">
            <span
              className={`d-block rounded-circle d-flex justify-content-center align-items-center fw-bold fs-5 ${sideBarStyles.stepNumber}`}
              id="userinfo"
            >
              1
            </span>
            <div className={`mb-0 ${sideBarResponseStyles.sideBarLink}`}>
              <p className="mb-0 secondary-text text-uppercase">Step 1</p>
              <h3 className="fw-bold">YOUR INFO</h3>
            </div>
          </li>
        </Link>
        {/* Select Plan */}
        <Link
          className=" text-decoration-none text-white step-link"
          to="/userplan"
        >
          <li className="d-flex align-items-center gap-4">
            <span
              className={`d-block ${sideBarStyles.stepNumber} rounded-circle d-flex justify-content-center align-items-center fw-bold fs-5`}
              id="userplan"
            >
              2
            </span>
            <div className={`mb-0 ${sideBarResponseStyles.sideBarLink}`}>
              <p className="mb-0 secondary-text text-uppercase">Step 2</p>
              <h3 className="fw-bold text-uppercase">Select plan</h3>
            </div>
          </li>
        </Link>
        {/* Add-ons  */}
        <Link
          className=" text-decoration-none text-white step-link"
          to="/useraddons"
        >
          <li className="d-flex align-items-center gap-4">
            <span
              className={`d-block ${sideBarStyles.stepNumber} rounded-circle d-flex justify-content-center align-items-center fw-bold fs-5`}
              id="useraddons"
            >
              3
            </span>
            <div className={`mb-0 ${sideBarResponseStyles.sideBarLink}`}>
              <p className="mb-0 secondary-text text-uppercase">Step 3</p>
              <h3 className="fw-bold text-uppercase">Add-ons</h3>
            </div>
          </li>
        </Link>
        {/* Summary */}
        <Link
          className=" text-decoration-none text-white step-link"
          to="/summary"
        >
          <li className="d-flex align-items-center gap-4">
            <span
              className={`d-block ${sideBarStyles.stepNumber} rounded-circle d-flex justify-content-center align-items-center fw-bold fs-5`}
              id="summary"
            >
              4
            </span>
            <div className={`mb-0 ${sideBarResponseStyles.sideBarLink}`}>
              <p className="mb-0 secondary-text text-uppercase">Step 4</p>
              <h3 className="fw-bold text-uppercase">Summary</h3>
            </div>
          </li>
        </Link>
      </ul>
    </>
  );
}
