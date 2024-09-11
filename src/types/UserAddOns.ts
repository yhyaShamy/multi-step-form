import { TUserAddOnsObj } from "./data";

type valueAndSetValue = {
  values: TUserAddOnsObj[] | [];
  setValues: React.Dispatch<React.SetStateAction<TUserAddOnsObj[] | []>>;
};

export type TAddOnsCheckBoxProps = {
  addons: TUserAddOnsObj;
  duration: "monthly" | "yearly";
  value: valueAndSetValue;
};
