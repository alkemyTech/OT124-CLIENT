import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
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
    lastimage: "",
  };
  const [testimonial, setTestimonial] = useState(initialValues);
  useEffect(() => {
    getTestimonial(id)
      .then((res) => {
        if (res.status === 200) {
          let { testimonial: resTestimonial } = res.data
          resTestimonial.image = resTestimonial.lastimage
          setTestimonial(resTestimonial);
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
  console.log(testimonial)
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
                    disabled={isDisabled}
                    error={errors?.image}
                    touched={touched?.image}
                    circle={true}
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
