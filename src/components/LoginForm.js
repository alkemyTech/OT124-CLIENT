import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Invalid email").max(255),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function LoginForm() {
  const styles = {
    label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
    field:
      "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
    button:
      " bg-gray-700 text-white font-bold py-2 mt-2 px-4 w-full rounded hover:bg-gray-600",
    errorMsg: "text-red-500 text-sm",
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // Send values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="grid w-80">
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            className={styles.field}
            autocomplete="off"
            id="email"
            name="email"
            type="email"
          />
          {errors.email && touched.email ? (
            <ErrorMessage
              className={styles.errorMsg}
              component="a"
              name="email"
            />
          ) : null}

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Field
            className={styles.field}
            id="password"
            name="password"
            type="password"
          />
          {errors.password && touched.password ? (
            <ErrorMessage
              className={styles.errorMsg}
              component="a"
              name="password"
            />
          ) : null}

          <button className={styles.button} type="submit">
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
}
