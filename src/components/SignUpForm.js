import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Obligatorio"),
  surname: yup.string().required("Obligatorio"),
  email: yup.string().required("Obligatorio").email("Email invalido").max(255),
  password: yup
    .string()
    .required("Obligatorio")
    .min(6, "Muy corta!")
    .max(50, "Muy larga!"),
});

export default function SignUpForm() {
  const [formData, setFormData] = useState({});

  const styles = {
    label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
    field:
      "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
    button:
      "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-full",
    errorMsg: "text-red-500 text-sm",
  };

  return (
    <Formik
      initialValues={{ name: "", surname: "", email: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label className={styles.label} htmlFor="name">
            Nombre
          </label>
          <Field className={styles.field} type="text" id="name" name="name" />
          <ErrorMessage
            className={styles.errorMsg}
            name="name"
            component="div"
          />

          <label className={styles.label} htmlFor="surname">
            Apellido
          </label>
          <Field
            className={styles.field}
            type="text"
            id="surname"
            name="surname"
          />
          <ErrorMessage
            className={styles.errorMsg}
            name="surname"
            component="div"
          />

          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            id="email"
            className={styles.field}
            type="email"
            name="email"
          />
          <ErrorMessage
            className={styles.errorMsg}
            name="email"
            component="div"
          />

          <label className={styles.label} htmlFor="password">
            Contraseña
          </label>
          <Field
            id="password"
            className={styles.field}
            type="password"
            name="password"
          />
          <ErrorMessage
            className={styles.errorMsg}
            name="password"
            component="div"
          />

          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            Registrarme
          </button>
        </Form>
      )}
    </Formik>
  );
}
