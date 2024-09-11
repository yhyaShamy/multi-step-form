import { ReactNode } from "react";
import { TUserInfo } from "./userInfo";
import { FormikProps } from "formik";

export type ChildrenProp = {
  children: ReactNode;
};

export type THeaderProp = {
  head: string;
  text: string;
};

export type TControl = {
  myFormik?: FormikProps<TUserInfo>;
  next?: string;
  prev?: string;
  isFinished?: boolean;
};
