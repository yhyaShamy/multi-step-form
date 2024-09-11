import { TMonthlyOrYearlyProps } from "../../types/userplan";

export default function MonthlyOrYearlyBilling({
  isMonthly,
  setIsMonthly,
  setValue,
  initPlan
}: TMonthlyOrYearlyProps) {
  function toggle() {

    setIsMonthly(!isMonthly);
    if(!initPlan) setValue("");
  }
  return (
    <>
      <input type="radio" name="monthlyOrYearly" defaultChecked={isMonthly} hidden />
      <input type="radio" name="monthlyOrYearly" defaultChecked={!isMonthly} hidden />
      <div className="w-full p-4 flex items-center gap-8 rounded-lg bg-secondary-700 justify-center">
        <span
          className={`text-xl font-bold cursor-pointer ${
            isMonthly ? "text-primary-900" : "text-secondary-900"
          }`}
          onClick={toggle}
        >
          Monthly
        </span>
        <span
          className="w-16 h-8 bg-primary-900 rounded-full relative cursor-pointer"
          onClick={toggle}
        >
          <span
            className={`size-5 bg-secondary-500 rounded-full absolute top-1/2 -translate-y-1/2 transition-transform duration-300 cursor-pointer ${
              isMonthly ? "translate-x-[30%]" : "translate-x-[190%]"
            }`}
            onClick={toggle}
          ></span>
        </span>
        <span
          className={`text-xl font-bold cursor-pointer ${
            !isMonthly ? "text-primary-900" : "text-secondary-900"
          }`}
          onClick={toggle}
        >
          Yearly
        </span>
      </div>
    </>
  );
}
