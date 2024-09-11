import { TUserPlan } from "../types/data";
import { userPlans } from "../services/data";

export default function getPlans(isMonthly: boolean): TUserPlan[] {
  // if is monthly so return monthly plans else return yearly plans
  const plansSelection = isMonthly
    ? userPlans.monthlyPlan
    : userPlans.yearlyPlan;
  return plansSelection;
}
