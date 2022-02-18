import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import SpinSVGButton from "../Shared/Loaders/SpinSVGButton";
import * as yup from "yup";
import {
  createTestimonial,
  getTestimonial,
  updateTestimonial,
} from "../../services/testimonials";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import InputForm from "../Shared/Forms/InputForm";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import SendButton from "../Shared/Buttons/SendButton";

const styles = {
  field:
    "w-full shadow-md bg-gray-100 border-b-4 border transition hover:border-sky-500 ease-linear duration-300 my-2 p-4 outline-none transform hover:-translate-x-2",
  errorsField:
    "w-full shadow-md bg-gray-100 border  border-red-500 my-2 p-4 outline-none",
  button:
    "bg-transparent flex items-center justify-center hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 px-4 w-96 transform hover:scale-110 ease-in duration-300",
  error: " text-red-500 text-lg",
};

const ErrorComponent = (props) => (
  <p className={styles.error + props.center}>{props.children}</p>
);

function CUTestimonialsForm(props) {
  const { isEdit } = props;
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const initialValues = {
    name: "",
    content: "",
    image: "",
    key: "",
  };
  const [testimonial, setTestimonial] = useState(initialValues);
  useEffect(() => {
    getTestimonial(id)
      .then((res) => {
        if (res.status === 200) {
          setTestimonial(res?.data?.testimonial);
        } else {
          setNotFound(true);
        }
      })
      .finally(setIsDisabled(false));
  }, [id]);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (isEdit) {
      updateTestimonial(values, id).then((res) => {
        if (res.status === 200) {
          setTestimonial(initialValues);
          resetForm();
          setSuccessMsg("El testimonio ha sido modificado exitosamente");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    } else {
      createTestimonial(values).then((res) => {
        if (res.status === 201) {
          setTestimonial(initialValues);
          resetForm();
          setSuccessMsg("El testimonio ha sido creado exitosamente");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    }
  };

  const testimonialsSchema = yup.object().shape({
    name: yup
      .string("El nombre debe ser un string")
      .required("El nombre del testimonio es requerido"),
    content: yup
      .string("El contenido debe ser un string")
      .required("El contenido del testimonio es requerido"),
    image: yup.mixed().required("El archivo es requerido"),
  });

  return (
    <div className="">
      {!notFound || !isEdit ? (
        <Formik
          validationSchema={testimonialsSchema}
          enableReinitialize={true}
          initialValues={testimonial}
          onSubmit={onSubmit}
        >
          {({
            values,
            setFieldValue,
            isSubmitting,
            errors,
            touched,
            setFieldError,
          }) => (
            <Form className=" container mx-auto shadow-xl py-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 sm:px-24">
                <div className=" order-last sm:order-first">
                    <InputForm
                      errors={error.name}
                      touched={touched.name}
                      name="name"
                      placeholder="Titulo"
                      type="text"
                      disabled={isDisabled}
                    />
                    <InputForm
                      errors={error.content}
                      touched={touched.content}
                      name="content"
                      placeholder="Contenido"
                      type="text"
                      disabled={isDisabled}
                      as="textarea"
                  />
                </div>
                <div className="w-full my-auto">
                  <UploadImageComponent
                    setFieldValue={setFieldValue}
                    setFieldError={setFieldError}
                    file={values?.image}
                    keyFile={values?.key}
                    disabled={isDisabled}
                    error={errors?.image}
                    touched={touched?.image}
                    circle={true}
                  />
                  <ErrorMessage
                    center=" text-center"
                    component={ErrorComponent}
                    name="image"
                  />
                </div>
              </div>
              <SendButton isSubmitting={isSubmitting} text={`${isEdit ? "Modificar": "Crear"}`} />
            </Form>
          )}
        </Formik>
      ) : 
        <NotFoundComponent title={"No existe ese testimonio"} />
      }
      {error && <ErrorAlert setError={setError} />}
      {successMsg && (
        <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
      )}
    </div>
  );
}

export default CUTestimonialsForm;
