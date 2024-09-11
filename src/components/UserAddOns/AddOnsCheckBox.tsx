import { useState } from "react";
import { formatPrice } from "../../helpers/fomatPrice";
import { TAddOnsCheckBoxProps } from "../../types/UserAddOns";
import CheckBox from "./CheckBox";

export default function AddOnsCheckBox({
  addons,
  duration,
  value: { setValues, values },
}: TAddOnsCheckBoxProps) {
  const { descreption, price, title } = addons;
  const matched = Boolean(values.find((value) => value === addons));
  const [checked, setchecked] = useState<boolean>(matched);
  function toggle() {
    if (!checked && !matched) setValues([...values, addons]);
    if (checked || matched) setValues(values.filter((val) => val !== addons));
    setchecked(!checked);
  }
  return (
    <div
      className={`p-3 p md:px-7 flex items-center gap-6 hover:border-primary-800 transition-colors duration-500 cursor-pointer border rounded-lg ${
        checked ? "border-primary-800" : "border-secondary-800"
      }`}
      onClick={toggle}
    >
      <input
        type="checkbox"
        readOnly
        checked={checked}
        name={`${title}&${duration}`}
        id={`${title}&${duration}`}
        hidden
      />

      <CheckBox checked={checked} toggle={toggle} />

      <div className="flex flex-col">
        <span className="text-lg md:text-xl text-primary-900 font-bold">
          {title}
        </span>
        <span className="text-sm md:text-lg text-secondary-900">
          {descreption}
        </span>
      </div>
      <span className="text-sm md:text-lg text-primary-800 ms-auto">
        +{formatPrice(price, duration)}
      </span>
    </div>
  );
}
