import React, { useContext } from "react";
import { controlContext } from "../Context/ControlContext";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { authContext } from "../Context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./UserInfo.module.scss";

export default function UserInfo() {
  const { setSideBarLink, setPrevControl, setNextControl } =
    useContext(controlContext);
  setSideBarLink("userinfo");
  setPrevControl(null);

  //   Authantcation

  const { setIsRegister } = useContext(authContext);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email address is not formatted correctly"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/[0-9]{6}/, " it must be more than 6 numbers"),
  });
  const myFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: () => {
      setNextControl("userplan");
      setIsRegister(true);
      toast.success("You Can Press Next Step Button !", {
        position: "top-center",
      });
    },
    validationSchema,
  });

  return (
    <>
      <Helmet>
        <title>Your-Info</title>
      </Helmet>

      <div className="container py-5">
        <h2 className="primary-text fw-bold fs-1">Personal info</h2>
        <p className="gray-text fs-5">
          Please provide your name, email address, and phone number.
        </p>
        <form className="mt-5" onSubmit={myFormik.handleSubmit}>
          <div className="d-flex justify-content-between mb-1">
            <label htmlFor="name" className="primary-text fs-5">
              Name
            </label>
            {myFormik.touched.name && myFormik.errors.name ? (
              <p className={`fw-bold mb-0 fs-5 text-danger`}>
                {myFormik.errors.name}
              </p>
            ) : (
              ""
            )}
          </div>
          <input
            type="text"
            id="name"
            className="w-100 p-2 primary-text rounded-3 fs-5 mb-4"
            placeholder="Name"
            value={myFormik.values.name}
            onChange={myFormik.handleChange}
            onBlur={myFormik.handleBlur}
          />
          {/* Email */}
          <div className="d-flex justify-content-between mb-1">
            <label htmlFor="email" className="primary-text fs-5">
              Email Address
            </label>
            {myFormik.touched.email && myFormik.errors.email ? (
              <p className={`fw-bold mb-0 fs-5 text-danger`}>
                {myFormik.errors.email}
              </p>
            ) : (
              ""
            )}
          </div>
          <input
            type="email"
            id="email"
            className="w-100 p-2 primary-text rounded-3 fs-5 mb-4"
            placeholder="example@gmail.com"
            value={myFormik.values.email}
            onChange={myFormik.handleChange}
            onBlur={myFormik.handleBlur}
          />
          {/* Phone Number */}
          <div className="d-flex justify-content-between mb-1">
            <label htmlFor="phone" className="primary-text fs-5">
              Phone Number
            </label>
            {myFormik.touched.phone && myFormik.errors.phone ? (
              <p className={`fw-bold mb-0 fs-5 text-danger`}>
                {myFormik.errors.phone}
              </p>
            ) : (
              ""
            )}
          </div>
          <input
            type="text"
            id="phone"
            className="w-100 p-2 primary-text rounded-3 fs-5 mb-4"
            placeholder="e.g. +1 234 567 890"
            value={myFormik.values.phone}
            onChange={myFormik.handleChange}
            onBlur={myFormik.handleBlur}
          />
          <button
            className="btn btn-lg btn-secondary fs-4 mt-3"
            type="submit"
            onSubmit={myFormik.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
