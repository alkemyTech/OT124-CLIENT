import { ErrorMessage, Field } from "formik";
import React from "react";

const styles = {
  field:
    "w-full shadow shadow-slate-300 hover:shadow-none bg-gray-100 border transition hover:border-sky-500 ease-linear duration-300 my-2 p-4 outline-none transform hover:-translate-x-2",
  errorsField:
    "w-full shadow-md bg-gray-100 border border-red-500 my-2 p-4 outline-none",
  button:
    "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-96 transform hover:scale-105 easy-in duration-300",
  error:
    " text-red-500 text-sm bg-red-200 text-center border border-red-500 mt-2 rounded-sm p-2 shadow shadow-red-300",
};

const skeletonStyles = {
  field: "w-full bg-gray-200 rounded-md my-2 p-4 animate-pulse",
  button:
    "bg-gray-200 text-transparent rounded py-2 mt-2 px-4 w-96 mx-auto my-4 animate-pulse",
};

const ErrorComponent = (props) => (
  <p className={styles.error + props.center}>{props.children}</p>
);

function InputForm(props) {
  const {
    errors,
    touched,
    name,
    placeholder,
    type,
    isDisabled,
    as,
    isLoading,
    id,
    high
  } = props;
  return (
    <>
      {!isLoading ? (
        <div className=" w-full">
          <Field
            as={as}
            className={`${
              errors && touched ? styles.errorsField : styles.field
            } ${as ? `${!high ? "h-32" : "h-64"} align-top resize-none` : "h-12"}`}
            name={name}
            placeholder={placeholder}
            type={type}
            disabled={isDisabled}
            id={id}
          
          />
          <ErrorMessage component={ErrorComponent} name={name} />
        </div>
      ) : (
        <div className={`${skeletonStyles.field} ${as ? "h-32" : "h-12"}`} />
      )}
    </>
  );
}

export default InputForm;
