import React, { createContext, useState } from "react";

export const plansContext = createContext();
export default function PlansContextProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [myAddPlan, setmyAddPlan] = useState(null);
  const [selectedAddPlans, setSelectedAddPlans] = useState([]);
  const [prevChecked, setprevChecked] = useState(null);
  const [userEdit, setuserEdit] = useState(false);
  return (
    <>
      <plansContext.Provider
        value={{
          selectedPlan,
          setSelectedPlan,
          myAddPlan,
          setmyAddPlan,
          selectedAddPlans,
          setSelectedAddPlans,
          prevChecked,
          setprevChecked,
          userEdit,
          setuserEdit,
        }}
      >
        {children}
      </plansContext.Provider>
    </>
  );
}
