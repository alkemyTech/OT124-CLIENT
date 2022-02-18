import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { createNew, getNew, updateNew } from "../../services/news";
import * as yup from "yup";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import SpinSVGButton from "../Shared/Loaders/SpinSVGButton";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import InputForm from "../Shared/Forms/InputForm";
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

function CUNewsForm(props) {
  const { isEdit } = props;
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const initialValues = {
    name: "",
    content: "",
    categoryId: "",
    type: "",
    image: "",
    key: "",
  };
  const [aNew, setANew] = useState(initialValues);
  useEffect(() => {
    getNew(id)
      .then((res) => {
        if (res.status === 200) {
          setANew(res?.data?.new);
        } else {
          setNotFound(true);
        }
      })
      .finally(setIsDisabled(false));
  }, [id]);

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    if (isEdit) {
      updateNew(values, id).then((res) => {
        if (res.status === 200) {
          setANew(initialValues);
          resetForm();
          setSuccessMsg("La novedad ha sido modificada exitosamente");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    } else {
      createNew(values).then((res) => {
        if (res.status === 201) {
          setANew(initialValues);
          resetForm();
          setSuccessMsg("La novedad ha sido creada exitosamente");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    }
  };
  const newsSchema = yup.object().shape({
    name: yup
      .string("El nombre debe ser un string")
      .required("El nombre de la novedad es requerida"),
    content: yup
      .string("El contenido debe ser un string")
      .required("El contenido de la novedad es requerido"),
    type: yup
      .string("El tipo debe ser un string")
      .required("El tipo de la novedad es requerido"),
    categoryId: yup
      .number("La categoria debe ser un numero")
      .required("La categoria de la novedad es requerida")
      .positive("La categoria debe ser un numero positivo")
      .integer("La categoria debe ser un numero entero"),
    image: yup.mixed().required("El archivo es requerido"),
  });

  return (
    <div className="">
      {!notFound || !isEdit ? (
        <Formik
          validationSchema={newsSchema}
          enableReinitialize={true}
          initialValues={aNew}
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
                <div>
                  <InputForm
                    errors={errors.name}
                    touched={touched.name}
                    name="name"
                    placeholder="Titulo"
                    type="text"
                    disabled={isDisabled}
                  />
                  <InputForm
                    errors={errors.content}
                    touched={touched.content}
                    name="content"
                    placeholder="Contenido"
                    type="text"
                    as="textarea"
                    disabled={isDisabled}
                  />
                  <InputForm
                    errors={errors.categoryId}
                    touched={touched.categoryId}
                    name="categoryId"
                    placeholder="Categoria"
                    type="number"
                    disabled={isDisabled}
                  />
                  <InputForm
                    errors={errors.type}
                    touched={touched.type}
                    name="type"
                    placeholder="Tipo"
                    type="text"
                    disabled={isDisabled}
                  />
                </div>
                <div className="w-full my-auto">
                  <UploadImageComponent
                    setFieldValue={setFieldValue}
                    setFieldError={setFieldError}
                    file={values?.image}
                    keyFile={values?.key}
                    disabled={isDisabled}
                    error={errors.image}
                    touched={touched.image}
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
      ) : (
        <NotFoundComponent title={"No existe esa novedad"} />
      )}
      {error && <ErrorAlert setError={setError} />}
      {successMsg && (
        <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
      )}
    </div>
  );
}

export default CUNewsForm;
