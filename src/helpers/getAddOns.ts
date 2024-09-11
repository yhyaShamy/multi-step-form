import { TUserAddOnsObj } from "../types/data";
import { userAddOns } from "../services/data";

export default function getAddOns(isMonthly: boolean): TUserAddOnsObj[] {
  // if is monthly so return monthly plans else return yearly plans
  const plansSelection = isMonthly
    ? userAddOns.monthlyPlans
    : userAddOns.yearlyPlans;
  return plansSelection
  ;
}
