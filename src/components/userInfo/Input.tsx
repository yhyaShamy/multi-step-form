import { TInputProp } from "../../types/userInfo";

export default function Input({ isFor, placeholder, formik }: TInputProp) {
  const { handleChange, values, handleBlur, errors, touched } = formik;
  // Handle if there an error
  const isError = Boolean(errors[isFor] && touched[isFor]);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label
          htmlFor={isFor}
          className="text-lg md:text-xl text-primary-900 capitalize"
        >
          {isFor}
        </label>
        {isError ? (
          <p className="text-lg md:text-xl text-danger font-bold">
            {errors[isFor]}
          </p>
        ) : (
          ""
        )}
      </div>
      <input
        type="text"
        id={isFor}
        name={isFor}
        onChange={handleChange}
        value={values[isFor]}
        onBlur={handleBlur}
        className={`border py-3
       px-2 rounded-lg placeholder:text-sm md:placeholder:text-lg placeholder:font-medium placeholder:text-secondary-900 text-primary-900 text-lg font-bold focus:outline-none  ${
         isError
           ? "border-danger"
           : "border-secondary-800 focus:border-primary-800"
       } transition-colors duration-100`}
        placeholder={placeholder}
      />
    </div>
  );
}
