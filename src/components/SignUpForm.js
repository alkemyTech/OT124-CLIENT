import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signUp } from "../services/auth";
import { GoogleLogin } from "react-google-login";
import { API_CLIENT_ID } from "../services";
import GoogleIcon from "./GoogleIcon";
import { setUserData } from "../features/authSlice";
import { useDispatch } from "react-redux";

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
  const navigate = useNavigate();
  const [showErrorMessage, setShowErrorMessage] = useState();
  const dispatch = useDispatch();

  function getErrorMessage(errorMessage) {
    let message;
    switch (errorMessage) {
      case "User already exists": {
        message = "Ya existe un usuario con ese email";
        break;
      }
      default: {
        message = "Algo salió mal";
      }
    }
    return message;
  }

  async function handleSubmit(values, actions) {
    const { tokenId } = values;
    setShowErrorMessage();

    const { name, surname, email, password } = values;
    const res = await signUp(name, surname, email, password, tokenId);

    if (res.status === 201 || res.status === 200) {
      dispatch(setUserData(res.data));
      navigate("/");
    } else {
      setShowErrorMessage(getErrorMessage(res.response.data.errors));
      actions.setSubmitting(false);
    }
  }

  const styles = {
    label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
    field:
      "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
    button:
      "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-full",
    errorMsg: "text-red-500 text-sm text-center",
  };

  return (
    <Formik
      initialValues={{ name: "", surname: "", email: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-96">
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

          {showErrorMessage && (
            <div className={styles.errorMsg}>{showErrorMessage}</div>
          )}
          <GoogleLogin
            className=" my-4 text-lg text-center"
            clientId={API_CLIENT_ID}
            render={(props) => (
              <button
                onClick={props.onClick}
                className={" inline-flex items-center " + styles.button}
                disabled={props.disabled}
              >
                <GoogleIcon className=" hover:bg-sky-500" />
                <span className={"w-full mt-1"}>Registrarme con Google</span>
              </button>
            )}
            onFailure={handleSubmit}
            onSuccess={handleSubmit}
            cookiePolicy={"single_host_origin"}
          />
        </Form>
      )}
    </Formik>
  );
}
