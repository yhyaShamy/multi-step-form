import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./UserPlan.module.scss";
import "../../Styles/App.media.scss";
import responseStyles from "./UserPlan.module.media.scss";
import arcadeImg from "../../assets/images/icon-arcade.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";
import { controlContext } from "../Context/ControlContext";
import { plansContext } from "../Context/plansContext";
import $ from "jquery";

export default function UserPlan() {
  const { setSideBarLink, setPrevControl, setNextControl } =
    useContext(controlContext);

  const { selectedPlan: currentSelectedPlan, setSelectedPlan } =
    useContext(plansContext);
  const monthlyPlan = [
    { image: arcadeImg, title: "Arcade", price: "$9/mo", duration: "monthly" },
    {
      image: advancedImg,
      title: "Advanced",
      price: "$12/mo",
      duration: "monthly",
    },
    { image: proImg, title: "Pro", price: "$15/mo", duration: "monthly" },
  ];
  const yearlyPlan = [
    {
      image: arcadeImg,
      title: "Arcade",
      price: "$90/yr",
      extra: "2 months free",
      duration: "yearly",
    },
    {
      image: advancedImg,
      title: "Advanced",
      price: "$120/yr",
      extra: "2 months free",
      duration: "yearly",
    },
    {
      image: proImg,
      title: "Pro",
      price: "$150/yr",
      extra: "2 months free",
      duration: "yearly",
    },
  ];

  const [isYearly, setisYearly] = useState(false);
  const [wasYearly, setWasYearly] = useState(false);

  let selectedPlan;

  if (isYearly || wasYearly) {
    selectedPlan = yearlyPlan;
  } else if (!isYearly) {
    selectedPlan = monthlyPlan;
  }

  const toggleBilleng = () => {
    console.log("operation", selectedPlan);
    setisYearly(!isYearly);
    if (isYearly || wasYearly) {
      setWasYearly(false);
      setisYearly(false);
    }
    console.log("from toggle : ", isYearly, wasYearly);
  };

  useEffect(() => {
    setPrevControl("userinfo");
    setSideBarLink("userplan");
    setWasYearly(currentSelectedPlan?.duration == "yearly");
    console.log(wasYearly);
    if (wasYearly) {
      setisYearly(!isYearly);
    }

    console.log("from useEffect : ", isYearly, wasYearly);

    $(".planBox").on("click", function (e) {
      $(".planBox").removeClass(styles.active);

      if ($(e.target).parents(".planBox").length) {
        $(e.target).parents(".planBox").addClass(styles.active);
      } else {
        $(e.target).addClass(styles.active);
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Your-Plan</title>
      </Helmet>
      <div className="container py-5 myContainer">
        <h2 className="primary-text fw-bold fs-1">Select Plan</h2>
        <p className="gray-text fs-5 mb-0">
          You have the option of monthly or yearly billing.
        </p>
        <div className={`mt-5 row g-4 myRow`}>
          {selectedPlan.map((plan, i) => {
            return (
              <div className="col-md-4  " key={i}>
                <div
                  className={`card p-3 pt-5 cursor-pointer ${styles.planBox} ${
                    responseStyles.planBox
                  } planBox ${
                    currentSelectedPlan?.title == plan.title
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => {
                    console.log(plan);
                    setSelectedPlan(plan);
                    setNextControl("useraddons");
                  }}
                >
                  <img
                    src={plan.image}
                    className={`card-img-top mb-5 ${responseStyles.myImg} ${styles.img}`}
                    alt={plan.title}
                  />
                  <div className={`card-body p-0 `}>
                    <h4 className="card-title primary-text fw-bold">
                      {plan.title}
                    </h4>
                    <p className="card-text gray-text fs-5 mb-0">
                      {plan.price}
                    </p>

                    <p
                      className={`card-text primary-text fs-6 fw-bold ${
                        plan.extra ? "" : "opacity-0"
                      }`}
                    >
                      {plan.extra ? plan.extra : "2 month free"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`mt-5 d-flex justify-content-center align-items-center py-3 rounded-3 gap-4 ${styles.durationPlan} durationPlan`}
        >
          <p
            className={`fs-4 mb-0 fw-bold ${
              !isYearly && !wasYearly ? "primary-text" : "gray-text"
            }`}
          >
            Monthly
          </p>
          <label htmlFor="togglerCheckBox">
            <div
              className={`${styles.togglerSlide} slide mb-0 rounded-top-pill rounded-bottom-pill cursor-pointer`}
            ></div>
          </label>
          <input
            type="checkbox"
            id="togglerCheckBox"
            checked={isYearly || wasYearly}
            hidden
            onChange={toggleBilleng}
          />
          <p
            className={`fs-4 mb-0 fw-bold  ${
              isYearly || wasYearly ? "primary-text" : "gray-text"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </>
  );
}
