import * as Yup from "yup";
import { useFormik as Formik } from "formik";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email address is not formatted correctly"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/[0-9]{6}/, " it must be more than 6 numbers"),
});

export default function useFormik() {
  const navigateTo = useNavigate();
  const myFormik = Formik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit() {
      navigateTo("/userplan");
    },
    validationSchema,
  });
  return myFormik;
}
