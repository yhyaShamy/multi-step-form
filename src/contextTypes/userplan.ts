import { Dispatch, SetStateAction } from "react";
import { TUserPlan } from "../types/data";

export type TSelectedPlanSetter = Dispatch<
  SetStateAction<TUserPlan | undefined>
>;
export type TSelectedPlan = TUserPlan | undefined;

export type TPlansContext = {
  selectedPlan: TSelectedPlan;
  setSelectedPlan: TSelectedPlanSetter;
};
