import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers/fomatPrice";
import { TSummaryTapleProps } from "../../types/summary";
import AddOns from "./AddOns";

export default function SummaryTable({ plan, addons }: TSummaryTapleProps) {
  const { title: planTitle, duration: planDuration, price: planPrice } = plan;
  return (
    <div className="p-5 rounded-lg bg-secondary-700 w-full min-h-[14rem] md:min-h-[18rem]">
      <div className="flex items-center justify-between pb-8 border-b border-secondary-800/70">
        <span className="flex flex-col gap-1">
          <span className="text-primary-900 text-lg md:text-xl capitalize font-bold">
            {planTitle}({planDuration})
          </span>
          <Link
            to="/userplan"
            className="text-primary-800 underline text-sm md:text-lg"
          >
            Change
          </Link>
        </span>
        <span className="text-lg md:text-xl text-primary-900 font-bold">
          {formatPrice(planPrice, planDuration)}
        </span>
      </div>

      <div className="mt-5">
        {addons.map((addOnsObj) => (
          <AddOns
            addons={addOnsObj}
            duration={planDuration}
            key={addOnsObj.id}
          />
        ))}
      </div>
    </div>
  );
}
