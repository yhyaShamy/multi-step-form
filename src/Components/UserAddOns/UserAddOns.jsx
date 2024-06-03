import React, { useContext, useEffect, useState } from "react";
import { plansContext } from "../Context/plansContext";
import { Navigate } from "react-router-dom";
import { controlContext } from "../Context/ControlContext";
import myStyle from "./UserAddOns.module.scss";
import toast from "react-hot-toast";
import "./UserAddOns.module.media.scss";

export default function UserAddOns() {
  const [checkedState, setCheckedState] = useState({
    onlineservice: false,
    largerstorage: false,
    customizableprofile: false,
  });

  const { setSideBarLink, setPrevControl, setNextControl } =
    useContext(controlContext);

  const {
    selectedPlan,
    selectedAddPlans,
    setSelectedAddPlans,
    prevChecked,
    setprevChecked,
  } = useContext(plansContext);
  const {
    selectedPlan: myPlan,
    myAddPlan,
    setmyAddPlan,
    setuserEdit,
  } = useContext(plansContext);

  useEffect(() => {
    setNextControl(null);
    setSideBarLink("useraddons");
    setPrevControl("userplan");
    if (prevChecked) {
      setCheckedState(prevChecked);
    }
  }, []);

  const monthlyPlans = [
    {
      title: "Online service",
      descreption: "Access to multiplayer games",
      price: "+$1/mo",
      id: 0,
    },
    {
      title: "Larger storage",
      descreption: "Extra 1TB of cloud save",
      price: "+$2/mo",
      id: 1,
    },
    {
      title: "Customizable Profile",
      descreption: "Custom theme on your profile",
      price: "+$2/mo",
      id: 2,
    },
  ];

  const yearlyPlans = [
    {
      title: "Online service",
      descreption: "Access to multiplayer games",
      price: "+$10/yr",
      id: 0,
    },
    {
      title: "Larger storage",
      descreption: "Extra 1TB of cloud save",
      price: "+$20/yr",
      id: 1,
    },
    {
      title: "Customizable Profile",
      descreption: "Custom theme on your profile",
      price: "+$20/yr",
      id: 2,
    },
  ];

  const [myCurrentPlans, setMyCurrentPlans] = useState([]);

  useEffect(() => {
    if (myPlan?.duration == "yearly") {
      setMyCurrentPlans(yearlyPlans);
    } else if (myPlan?.duration == "monthly") {
      setMyCurrentPlans(monthlyPlans);
    }
  }, []);

  if (!selectedPlan) {
    return <Navigate to="/userplan" />;
  }

  const toggleSelect = (plan, e) => {
    console.log(e.target.checked, plan.title);
    if (e.target.checked) {
      setSelectedAddPlans((prevSelectedPlans) =>
        prevSelectedPlans.includes(plan)
          ? prevSelectedPlans.filter((p) => p !== plan)
          : [...prevSelectedPlans, plan]
      );
    } else if (!e.target.checked) {
      setSelectedAddPlans(selectedAddPlans.filter((p) => p.id != plan.id));
    }
  };

  const isPlanActive = (service) =>
    checkedState[service] ? myStyle.active : "";

  const handleOnChange = (e) => {
    const { checked, name } = e.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className="container py-5">
        <h2 className="primary-text fw-bold fs-1">Pick add ons</h2>
        <p className="gray-text fs-5">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="mt-5 d-flex flex-column gap-4 mb-4">
          {myCurrentPlans.map((plan, i) => {
            return (
              <label htmlFor={`myCheckBox${i}`}>
                <div
                  className={`planBox cursor-pointer rounded-3 p-3 ${isPlanActive(
                    plan.title.toLowerCase().split(" ").join("")
                  )}  ${myStyle.planBox}`}
                  key={i}
                >
                  <div className={`row`}>
                    <div className="col-sm-1 col-2">
                      <div
                        className={`d-flex align-items-center justify-content-center h-100 w-100`}
                      >
                        <i
                          className={`fa-solid fa-check 
                          
                          ${myStyle.myBtn} p-2 rounded-3 mycheckBox
                          
                           ${
                             isPlanActive(
                               plan.title.toLowerCase().split(" ").join("")
                             )
                               ? myStyle.myBtnActive
                               : ""
                           }
                            `}
                        ></i>
                        <input
                          type="checkbox"
                          id={`myCheckBox${i}`}
                          hidden
                          checked={
                            checkedState[
                              plan.title.toLowerCase().split(" ").join("")
                            ]
                          }
                          onChange={(e) => {
                            toggleSelect(plan, e);
                            handleOnChange(e);
                          }}
                          name={plan.title.toLowerCase().split(" ").join("")}
                        />
                      </div>
                    </div>
                    <div className="col-sm-11 col-10">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 className="primary-text fw-bold mb-1">
                            {plan.title}
                          </h4>
                          <p className="mb-0 gray-text fs-5">
                            {plan.descreption}
                          </p>
                        </div>
                        <p className={`${myStyle.planPrice} mb-0 fs-5`}>
                          {plan.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        <button
          className="btn btn-lg btn-secondary mt-3 fs-4"
          onClick={() => {
            setNextControl("summary");
            toast.success("You Can Press Next Step Button !", {
              position: "top-center",
            });
            setmyAddPlan(
              myCurrentPlans.filter(
                (plan, i) => myCurrentPlans[selectedAddPlans[i]?.id]
              )
            );
            setprevChecked(checkedState);
            setuserEdit(false);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
