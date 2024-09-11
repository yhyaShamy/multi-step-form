import { useContext } from "react";
import { AddOnsContext } from "../context/useAddOns";
import { TAddOnsContext } from "../contextTypes/userAddOns";

export default function useAddOnsContext(): TAddOnsContext {
  const context = useContext(AddOnsContext);
  if (!context)
    throw new Error(
      "This component must be in AddOns Provider to use this hook"
    );
  return context;
}
