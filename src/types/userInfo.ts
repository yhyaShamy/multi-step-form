import { FormikProps } from "formik";

export type TUserInfo = {
  name: string;
  email: string;
  phone: string;
};

export type TInputProp = {
  isFor: "name" | "phone" | "email";
  placeholder: string;
  formik: FormikProps<TUserInfo>;
};
