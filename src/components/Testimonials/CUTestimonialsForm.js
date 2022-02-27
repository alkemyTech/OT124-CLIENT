import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import InputForm from "../Shared/Forms/InputForm";
import * as yup from "yup";
import {
  createTestimonial,
  getTestimonial,
  updateTestimonial,
} from "../../services/testimonials";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import { useNavigate, useParams } from "react-router";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import AddButton from "../Shared/Buttons/Addbutton";
import TwoColsForm from "../Shared/Containers/TwoColsForm";
import Spinner from "../Shared/Loaders/Spinner";

function CUTestimonialsForm({ isEdit }) {
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  const initialValues = {
    name: "",
    content: "",
    image: "",
  };

  const [testimonial, setTestimonial] = useState(initialValues);

  function handleSubmit(values, { resetForm, setSubmitting }) {
    if (!isEdit) {
      createTestimonial(values)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resetForm();
            setSuccessMsg("El testimonio ha sido creado exitosamente");
            navigate(-1);
          } else {
            setError(true);
            setSubmitting(false);
          }
        })
        .catch((err) => err);
    } else if (isEdit) {
      updateTestimonial(values, id)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resetForm();
            setSuccessMsg("El testimonio ha sido modificado exitosamente");
            navigate(-1);
          } else {
            setError(true);
            setSubmitting(false);
          }
        })
        .catch((err) => err);
    }
  }

  useEffect(() => {
      getTestimonial(id)
        .then((res) => {
          if (res?.status === 200 || res?.status === 304) {
            setTestimonial(res?.data.testimonial);
          } else {
            setNotFound(true);
          }
        })
        .finally(()=>{
          setIsDisabled(false)
          setTimeout(() => setIsLoading(false), 500);
        });
  }, [id]);

  const testimonialsSchema = yup.object().shape({
    name: yup
      .string("El nombre debe ser un string")
      .required("El nombre del testimonio es requerido"),
    content: yup
      .string("El contenido debe ser un string")
      .required("El contenido del testimonio es requerido"),
    image: yup.mixed().required("El archivo es requerido"),
  });

  if (isLoading){
    return <Spinner />
  }

  return (
    <>
      {!notFound || !isEdit ? (
        <>
          <Formik
            initialValues={testimonial}
            enableReinitialize={true}
            validationSchema={testimonialsSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              setFieldValue,
              setFieldError,
            }) => (
              <Form>
                <TwoColsForm>
                  <div className="sm:w-[500px]">
                    <InputForm
                      errors={errors.name}
                      touched={touched.name}
                      name={"name"}
                      placeholder={"Nombre"}
                      type={"text"}
                    />
                    <InputForm
                      errors={errors.content}
                      touched={touched.content}
                      name={"content"}
                      placeholder={"Contenido"}
                      type={"text"}
                      as={"textarea"}
                      high={true}
                    />
                  </div>
                  <div className="w-full my-auto order-first sm:order-last">
                    <UploadImageComponent
                      setFieldValue={setFieldValue}
                      setFieldError={setFieldError}
                      file={values?.image}
                      disabled={isDisabled}
                      error={errors.image}
                      touched={touched.image}
                      circle={true}
                    />
                  </div>
                </TwoColsForm>
                <AddButton isEdit={isEdit} isSubmitting={isSubmitting} />
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
      ) : (
        <NotFoundComponent title={"No existe esa organización"} />
      )}
    </>
  );
}

export default CUTestimonialsForm;
