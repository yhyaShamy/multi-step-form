import { TUserAddOnsObj } from "../types/data";

export type TAddOnsContext = {
    addOns: TUserAddOnsObj[];
    setAddOns: React.Dispatch<React.SetStateAction<TUserAddOnsObj[]>>;
  };