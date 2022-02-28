import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import { postContact } from "../../services/contact";
import { useState } from "react";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import { useEffect } from "react";
import InputForm from "../Shared/Forms/InputForm";
import SendButton from "../Shared/Buttons/SendButton";

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
          <Form className=" container mx-auto px-6 my-auto bg-white py-4 sm:rounded-l-xl rounded-xl">
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
            <SendButton isSubmitting={isSubmitting} isLoading={isLoading} text={"Enviar"} />
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
