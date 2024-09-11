import { formatPrice } from "../../helpers/fomatPrice";
import { TCheckedBoxProps } from "../../types/userplan";

export default function CheckboxCard({
  plan,
  currentValue,
  setValue,
  initPlan,
}: TCheckedBoxProps) {
  const { duration, image, price, title, extra } = plan;
  const isChecked = Boolean(`${duration}&${title}` == currentValue);
  return (
    <>
      <input
        type="radio"
        name={duration}
        value={`${duration}&${title}`}
        id={`${duration}&${title}`}
        checked={isChecked}
        hidden
      />
      <label
        htmlFor={`${duration}&${title}`}
        onClick={() => {
          setValue(`${duration}&${title}`);
        }}
      >
        <div
          className={`border  md:h-auto rounded-lg transition-colors duration-500 hover:border-primary-800 flex md:flex-col p-4 cursor-pointer gap-6 md:gap-0 items-center md:items-start md:space-y-2 ${
            initPlan?.price == price || isChecked
              ? "border-primary-800 bg-secondary-700"
              : "border-secondary-800"
          }`}
        >
          <img src={image} alt={title} className="size-14 md:size-16 md:mb-8" />
          <div className="">
            <h3 className="font-bold text-xl text-primary-900">{title}</h3>
            <p className="font-bold text-lg text-secondary-900">
              {formatPrice(price, duration)}
            </p>
            {extra ? <p className="text-primary-900 ">{extra}</p> : ""}
          </div>
        </div>
      </label>
    </>
  );
}
