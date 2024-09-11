import { TUserPlan } from "./data";

export type TCheckedBoxProps = {
  plan: TUserPlan;
  initPlan:TUserPlan | undefined
  currentValue: string | null;
  setValue: (value: string) => void;
};

export type TMonthlyOrYearlyProps = {
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  initPlan:TUserPlan | undefined
  setValue: (value: string) => void;
};

export type TInitUserPlanValues = {
  value: string;
};
