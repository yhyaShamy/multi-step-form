import { TSummaryTapleProps } from "../../types/summary";
import { formatPrice } from "../../helpers/fomatPrice";

export default function TotalPrice({
  addons,
  plan: { duration, price },
}: TSummaryTapleProps) {
  const addOnsTotalPrice = addons.map((addonsObj) => addonsObj.price);

  const totalPrice =
    addOnsTotalPrice.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) + price;
  return (
    <div className="mt-12 flex items-center justify-between ps-5">
      <p className="text-secondary-900 text-sm md:text-lg">
        Total(per {duration})
      </p>
      <p className="text-xl md:text-2xl font-bold text-primary-800">
        {formatPrice(totalPrice, duration)}
      </p>
    </div>
  );
}
