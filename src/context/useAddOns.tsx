import { createContext, useState } from "react";
import { TUserAddOnsObj } from "../types/data";
import { ChildrenProp } from "../types/global";
import { TAddOnsContext } from "../contextTypes/userAddOns";

export const AddOnsContext = createContext<TAddOnsContext>({
addOns:[],
setAddOns:() => {}
});

export default function AddOnsProvider({ children }: ChildrenProp) {
  const [addOns, setAddOns] = useState<TUserAddOnsObj[]>([]);
  return (
    <AddOnsContext.Provider value={{ addOns, setAddOns }}>
      {children}
    </AddOnsContext.Provider>
  );
}
