import { useEffect } from "react";
import useAddOnsContext from "../hook/useAddOnsContext";
import usePlansContext from "../hook/usePlansContext";
import icon from "/public/icon-thank-you.svg";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const setAddOns = useAddOnsContext().setAddOns;
  const setSelectedPlan = usePlansContext()?.setSelectedPlan;
  const navigate = useNavigate();

  useEffect(() => {
    if (!setAddOns || !setSelectedPlan) {
      navigate("/");
      return;
    }
    setAddOns([]);
    setSelectedPlan(undefined);
  }, [setAddOns, setSelectedPlan, navigate]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img src={icon} alt="thankYou" className="size-[20%] mb-7" />
      <h2 className="text-3xl font-bold text-primary-900 mb-6">Thank you!</h2>
      <p className="text-secondary-900 text-xl text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
