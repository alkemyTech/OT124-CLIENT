import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signUp } from "../services/auth";

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
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

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
      onSubmit={async (values, { setSubmitting }) => {
        setShowErrorMessage(false);
        const { name, surname, email, password } = values;
        const res = await signUp(name, surname, email, password);
        if (res.status != 200) {
          setShowErrorMessage(true);
          setSubmitting(false);
        } else {
          navigate("/");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label className={styles.label} htmlFor="name">
            Nombre
          </label>
          <Field
            autoComplete="off"
            className={styles.field}
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage
            className={styles.errorMsg}
            name="name"
            component="div"
          />

          <label className={styles.label} htmlFor="surname">
            Apellido
          </label>
          <Field
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
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

          {showErrorMessage && <span className={styles.errorMsg}>Error</span>}
        </Form>
      )}
    </Formik>
  );
}
