import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import myStyle from "./Summary.module.scss";
import { plansContext } from "../Context/plansContext";
import { controlContext } from "../Context/ControlContext";

export default function Summary() {
  const { setSideBarLink, setPrevControl } = useContext(controlContext);

  const { setUserReadyToSeeSummary, setIsConfirmed } = useContext(authContext);
  const { myAddPlan, selectedPlan, userEdit, setuserEdit } =
    useContext(plansContext);

  if (myAddPlan) {
    setUserReadyToSeeSummary(true);
  }

  const [total, setTotal] = useState(null);

  useEffect(() => {
    setIsConfirmed(false);
    setSideBarLink("summary");
    setPrevControl("useraddons");
    const myPlanPrice = Number(selectedPlan.price.split("/")[0].slice(1));

    const myAddPlansPrice = myAddPlan
      ?.map((plan) => Number(plan.price.split("/")[0].slice(2)))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const totalPrice = myPlanPrice + myAddPlansPrice;

    if (selectedPlan.duration == "monthly") {
      setTotal({
        duration: selectedPlan.duration,
        price: "$" + totalPrice + "/mo",
      });
    } else {
      setTotal({
        duration: selectedPlan.duration,
        price: "$" + totalPrice + "/yr",
      });
    }
  }, []);

  if (!myAddPlan || userEdit) {
    return <Navigate to="/useraddons" />;
  }

  return (
    <>
      <Helmet>
        <title>Summary</title>
      </Helmet>
      <div className="container py-5">
        <h2 className="primary-text fw-bold fs-1">Finishing up</h2>
        <p className="gray-text fs-5">
          Double-check everything looks OK before confirming
        </p>
        <div className={`mt-5 rounded-3 ${myStyle.summaryBox} p-3`}>
          <div className="d-flex justify-content-between align-items-center pb-4 border-bottom border-1">
            <div>
              <p className="mb-0 primary-text fw-bold fs-5 mb-1 text-capitalize">
                {selectedPlan.title} ({selectedPlan.duration})
              </p>
              <Link
                to="/userplan"
                className="gray-text fs-5"
                onClick={() => setuserEdit(true)}
              >
                Change
              </Link>
            </div>
            <p className="mb-0 primary-text fw-bold fs-5">
              {selectedPlan.price}
            </p>
          </div>
          <ul className=" list-unstyled mt-3">
            {myAddPlan.map((plan, i) => {
              return (
                <li
                  className="d-flex justify-content-between align-items-center mb-2"
                  key={i}
                >
                  <p className="mb-0 fs-5 gray-text">{plan.title}</p>
                  <p className="mb-0 fs-5 primary-text">{plan.price}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <p className="mb-0 fs-5 gray-text">Total ({total?.duration})</p>
          <p className={`mb-0 fs-4 fw-bold primary-text ${myStyle.totalPrice}`}>
            {total?.price}
          </p>
        </div>
      </div>
    </>
  );
}
