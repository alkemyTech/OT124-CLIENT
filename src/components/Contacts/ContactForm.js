import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { postContact } from "../../services/contact";
import { useState } from "react";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SpinSVGButton from "../Shared/Loaders/SpinSVGButton";
import { useEffect } from "react";
import InputForm from "../Shared/Forms/InputForm";
import SendButton from "../Shared/Buttons/SendButton";

const styles = {
  field:
    "w-full shadow-md bg-gray-100 border transition hover:border-sky-500 ease-linear duration-300 my-2 p-4 outline-none transform hover:-translate-x-2",
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
  <p className={styles.error}>{props.children}</p>
);

export default function ContactForm(props) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Por favor ingresa tu nombre"),
    email: Yup.string()
      .email(
        "Por favor ingresa un formato de email válido 'ejemplo@correo.com'"
      )
      .required("Por favor ingresa un email"),
    phone: Yup.number("El telefono debe ser un numero")
      .positive("Por favor ingresa solo numeros")
      .integer("Por favor ingresa solo numeros")
      .min(10000000, "Debe ingresar un mínimo de 8 números")
      .max(999999999999, "Debe ingresar un maximo de 13 números ")
      .required("Por favor ingresa un teléfono"),
    message: Yup.string().required("Por favor ingresa un mensaje"),
  });

  async function handleSubmit(values) {
    const { name, email, phone, message } = values;
    const res = await postContact(name, email, phone, message);

    if (res.status === 201 || res.status === 200) {
      setSuccessMsg(
        "¡Gracias por contactarnos! Su formulario de contacto ha sido recibido"
      );
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className=" container mx-auto px-5">
            <InputForm
              errors={errors.name}
              touched={touched.name}
              name={"name"}
              placeholder={"Nombres"}
              type={"text"}
              isLoading={isLoading}
            />
            <InputForm
              errors={errors.email}
              touched={touched.email}
              name={"email"}
              placeholder={"Email"}
              type={"text"}
              isLoading={isLoading}
            />
            <InputForm
              errors={errors.phone}
              touched={touched.phone}
              name={"phone"}
              placeholder={"Teléfono"}
              type={"number"}
              isLoading={isLoading}
            />
            <InputForm
              errors={errors.message}
              touched={touched.message}
              name={"message"}
              placeholder={"Mensaje"}
              type={"text"}
              as={"textarea"}
              isLoading={isLoading}
            />
            <SendButton isSubmitting={isSubmitting} />
            {error && <ErrorAlert setError={setError} />}
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
