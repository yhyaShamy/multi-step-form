import { userPlans } from "../services/data";
import { TUserPlan } from "../types/data";

export function convertValueToPlanObj(value: string): TUserPlan | undefined {
  const [duration, title] = value.split("&");
  const plans: TUserPlan[] =
    duration === "monthly" ? userPlans.monthlyPlan : userPlans.yearlyPlan;
  const plan: TUserPlan | undefined = plans.find(
    (plan) => plan?.title === title
  );
  return plan;
}
