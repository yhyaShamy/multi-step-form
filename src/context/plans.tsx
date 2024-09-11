import { createContext, useState } from "react";
import { ChildrenProp } from "../types/global";
import { TUserPlan } from "../types/data";
import { TPlansContext } from "../contextTypes/userplan";

export const PlansContext = createContext<TPlansContext>({
  selectedPlan: undefined,
  setSelectedPlan: () => {},
});

export const PlansProvider = ({ children }: ChildrenProp) => {
  const [selectedPlan, setSelectedPlan] = useState<TUserPlan | undefined>(
    undefined
  );
  return (
    <PlansContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlansContext.Provider>
  );
};
