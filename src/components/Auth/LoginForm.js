import React, { useState } from "react";
import * as Yup from "yup";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import InputForm from "../Shared/Forms/InputForm";
import SendButton from "../Shared/Buttons/SendButton";
import { Formik, Form } from "formik";
import { logIn } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import GoogleButton from "../Shared/Buttons/GoogleButton";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Obligatorio")
      .email("Email invalido")
      .max(255),
    password: Yup.string()
      .min(6, "Muy corta!")
      .max(50, "Muy larga!")
      .required("Obligatorio"),
  });

  async function handleSubmit(values) {
    const { email, password, tokenId } = values;
    const res = await logIn(email, password, tokenId);

    if (res.status === 201 || res.status === 200) {
      dispatch(setUserData(res.data));
      navigate("/");
    } else {
      setShowErrorMessage(getErrorMessage(res.response.data.errors));
      setError(true);
    }
  }

  function getErrorMessage(errorMessage) {
    let message;
    switch (errorMessage) {
      case "User does not exist": {
        message = "El usuario no existe";
        break;
      }
      case "Password invalid": {
        message = "La constraseña es incorrecta";
        break;
      }
      default: {
        message = "Algo salió mal";
      }
    }
    return message;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className=" container mx-auto px-5">
            <InputForm
              errors={errors.email}
              touched={touched.email}
              name={"email"}
              placeholder={"Email"}
              type={"text"}
              isLoading={false}
            />
            <InputForm
              errors={errors.password}
              touched={touched.password}
              name={"password"}
              placeholder={"Contraseña"}
              type={"password"}
              isLoading={false}
            />
            <SendButton
              isSubmitting={isSubmitting}
              isLoading={false}
              text={"Entrar"}
            />
            <GoogleButton handleSubmit={handleSubmit} />
            {error && (
              <ErrorAlert setError={setError} message={showErrorMessage} />
            )}
            {successMsg && (
              <SuccessAlert
                successMsg={successMsg}
                setSuccessMsg={setSuccessMsg}
              />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
