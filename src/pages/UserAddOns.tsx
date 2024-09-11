import { useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import AddOnsCheckBox from "../components/UserAddOns/AddOnsCheckBox";
import usePlansContext from "../hook/usePlansContext";
import { useEffect } from "react";
import StepsControl from "../components/ui/StepsControl";
import useAddOnsContext from "../hook/useAddOnsContext";
import getAddOns from "../helpers/getAddOns";

export default function UserAddOns() {
  const selectedPlan = usePlansContext()?.selectedPlan;
  const { addOns, setAddOns } = useAddOnsContext();
  const navigateTo = useNavigate();

  // Check if there's plan selected and if not return user back to select a plan
  useEffect(() => {
    if (!selectedPlan) {
      navigateTo("/userplan");
    }
  }, [navigateTo, selectedPlan]);
  if (!selectedPlan) return;
  // determine duration
  const addOnsArray = getAddOns(
    selectedPlan.duration == "monthly" ? true : false
  );
  return (
    <>
      <section className="h-full flex flex-col">
        <Header
          head="Pich add-ons"
          text="Add-Ons help enhance your gaming experiece."
        />
        <div className="space-y-7">
          {addOnsArray.map((plan) => (
            <AddOnsCheckBox
              addons={plan}
              duration={selectedPlan.duration}
              key={plan.title}
              value={{ values: addOns, setValues: setAddOns }}
            />
          ))}
        </div>
        <StepsControl prev="/userplan" next="/summary" />
      </section>
    </>
  );
}
