import { useContext } from "react";
import { PlansContext } from "../context/plans";
import { TPlansContext } from "../contextTypes/userplan";

export default function usePlansContext(): TPlansContext {
  const context = useContext(PlansContext);
  if (!context)
    throw new Error(
      "This component must be in Plans Provider to use this hook"
    );
  return context;
}
