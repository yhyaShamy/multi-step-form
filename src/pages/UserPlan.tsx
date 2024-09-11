import { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import CheckboxCard from "../components/userPlan/CheckboxCard";
import MonthlyOrYearlyBilling from "../components/userPlan/MonthlyOrYearlyBilling";
import usePlansContext from "../hook/usePlansContext";
import StepsControl from "../components/ui/StepsControl";
import { convertValueToPlanObj } from "../helpers/getSelectedPlan";
import getPlans from "../helpers/getPlans";

export default function UserPlan() {
  const { selectedPlan, setSelectedPlan } = usePlansContext();
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [value, setvalue] = useState<string | null>(null);
  const plans = getPlans(isMonthly);
  // For defining which plan is active
  if (value) setSelectedPlan(convertValueToPlanObj(value));
  useEffect(() => {
    if (selectedPlan) setIsMonthly(selectedPlan.duration === "monthly");
  }, [selectedPlan]);

  return (
    <section className="h-full flex flex-col">
      <Header
        head="Select your plan"
        text="You have the option of monthly or yearly billing."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
        {plans.map((plan, i) => (
          <CheckboxCard
            plan={plan}
            key={i}
            setValue={setvalue}
            currentValue={value}
            initPlan={selectedPlan}
          />
        ))}
      </div>
      <MonthlyOrYearlyBilling
        setValue={setvalue}
        isMonthly={isMonthly}
        setIsMonthly={setIsMonthly}
        initPlan={selectedPlan}
      />
      <StepsControl
        prev={"/"}
        next={value || selectedPlan ? "/useraddons" : ""}
      />
    </section>
  );
}
