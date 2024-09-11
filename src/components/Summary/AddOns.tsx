import { formatPrice } from "../../helpers/fomatPrice";
import { TUserAddOnsObj } from "../../types/data";

type AddOnsFormaterProp = {
  duration: "monthly" | "yearly";
  addons: TUserAddOnsObj;
};
export default function AddOns({ addons, duration }: AddOnsFormaterProp) {
  const { title, price } = addons;
  return (
    <div className="flex justify-between items-center text-sm md:text-lg pb-4">
      <span className="text-secondary-900">{title}</span>
      <span className="text-primary-900 font-bold">
        +{formatPrice(price, duration)}
      </span>
    </div>
  );
}
