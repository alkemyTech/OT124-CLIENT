import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { postContact } from "../services/contact";
import { useState } from "react";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import SpinSVGButton from "./SpinSVGButton";

const styles = {
  field:
    "w-full shadow-md bg-gray-100 border-b-4 border transition hover:border-sky-500 ease-linear duration-300 my-2 p-4 outline-none transform hover:-translate-x-2",
  errorsField:
    "w-full shadow-md bg-gray-100 border  border-red-500 my-2 p-4 outline-none",
  button:
    "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-96 transform hover:scale-105 easy-in duration-300",
  error: " text-red-500 text-lg",
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
  const validationSchema = Yup.object({
    name: Yup.string().required("Por favor ingresa tu nombre"),
    email: Yup.string()
      .email(
        "Por favor ingresa un formato de email válido 'ejemplo@correo.com'"
      )
      .required("Por favor ingresa un email"),
    phone: Yup
      .number('El telefono debe ser un numero')
      .positive('Por favor ingresa solo numeros')
      .integer('Por favor ingresa solo numeros')
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className=" container mx-auto px-5">
          <div className=" w-full">
            <Field
              className={`${
                errors.name && touched.name ? styles.errorsField : styles.field
              } h-16 `}
              name="name"
              placeholder="Nombre"
              type="text"
            />
            <ErrorMessage component={ErrorComponent} name="name" />
          </div>
          <div className="w-full">
            <Field
              className={`${
                errors.email && touched.email
                  ? styles.errorsField
                  : styles.field
              } h-16`}
              name="email"
              placeholder="Correo Electrónico"
              type="text"
            />
            <ErrorMessage component={ErrorComponent} name="email" />
          </div>
          <div className="w-full">
            <Field
              className={`${
                errors.phone && touched.phone
                  ? styles.errorsField
                  : styles.field
              } h-16`}
              name="phone"
              placeholder="Teléfono"
              type="number"
            />
            <ErrorMessage component={ErrorComponent} name="phone" />
          </div>
          <div className="w-full">
            <Field
              as="textarea"
              className={`${
                errors.message && touched.message
                  ? styles.errorsField
                  : styles.field
              } h-32 resize-none`}
              name="message"
              placeholder="Mensaje"
            />
            <ErrorMessage component={ErrorComponent} name="message" />
          </div>
          <div className="flex justify-center my-4">
            <button
              className={`${styles.button}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && <SpinSVGButton />}
              Enviar
            </button>
          </div>
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
  );
}
