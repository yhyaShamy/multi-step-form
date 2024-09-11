import { useNavigate } from "react-router-dom";
import Header from "../components/ui/Header";
import StepsControl from "../components/ui/StepsControl";
import usePlansContext from "../hook/usePlansContext";
import SummaryTable from "../components/Summary/SummaryTable";
import useAddOnsContext from "../hook/useAddOnsContext";
import { useEffect } from "react";
import TotalPrice from "../components/Summary/TotalPrice";

export default function Summary() {
  const selectedPlan = usePlansContext()?.selectedPlan;
  const addOns = useAddOnsContext()?.addOns;
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectedPlan || !addOns) {
      navigate("/");
    }
  });
  if (!selectedPlan || !addOns) return;

  return (
    <>
      <section className="h-full flex flex-col">
        <Header
          head="Finishing up"
          text="Double-check everything looks OK before confirming"
        />
        <SummaryTable addons={addOns} plan={selectedPlan} />
        <TotalPrice addons={addOns} plan={selectedPlan} />
        <StepsControl prev="/useraddons" isFinished={true} next="/thankyou" />
      </section>
    </>
  );
}
