import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signUp } from "../../services/auth";
import { setUserData } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import InputForm from "../Shared/Forms/InputForm";
import SendButton from "../Shared/Buttons/SendButton";
import GoogleButton from "../Shared/Buttons/GoogleButton";

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
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState();

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

  async function handleSubmit(values) {
    const { tokenId } = values;
    setShowErrorMessage();

    const { name, surname, email, password } = values;
    const res = await signUp(name, surname, email, password, tokenId);

    if (res.status === 201 || res.status === 200) {
      dispatch(setUserData(res.data));
      navigate("/");
    } else {
      setShowErrorMessage(getErrorMessage(res.response.data.errors));
      setError(true);
    }
  }

  return (
    <Formik
      initialValues={{ name: "", surname: "", email: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className=" container mx-auto px-5">
          <InputForm
            errors={errors.name}
            touched={touched.name}
            name={"name"}
            placeholder={"Nombre"}
            type={"text"}
            isLoading={false}
          />
          <InputForm
            errors={errors.surname}
            touched={touched.surname}
            name={"surname"}
            placeholder={"Apellido"}
            type={"text"}
            isLoading={false}
          />
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
            text={"Registrarse"}
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
  );
}
