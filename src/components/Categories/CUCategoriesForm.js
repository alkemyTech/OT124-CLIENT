import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SpinSVGButton from "../Shared/Loaders/SpinSVGButton";
import * as yup from "yup";
import {
  createCategory,
  getCategory,
  updateCategory,
} from "../../services/categories";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import InputForm from "../Shared/Forms/InputForm";
import SendButton from "../Shared/Buttons/SendButton";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";

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

function CUCategoriesForm(props) {
  const { isEdit } = props;
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const initialValues = {
    name: "",
    description: "",
  };
  const [category, setCategory] = useState(initialValues);
  useEffect(() => {
    getCategory(id)
      .then((res) => {
        if (res.status === 200) {
          setCategory(res?.data?.category);
        } else {
          setNotFound(true);
        }
      })
      .finally(setIsDisabled(false));
  }, [id]);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (isEdit) {
      updateCategory(values, id).then((res) => {
        if (res.status === 200) {
          setCategory(initialValues);
          resetForm();
          setSuccessMsg("La categoria ha sido modificada exitosamente");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    } else {
      createCategory(values).then((res) => {
        if (res.status === 201) {
          setCategory(initialValues);
          resetForm();
          setSuccessMsg("La categoria ha sido creada exitosamente");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    }
  };
  const categoriesSchema = yup.object().shape({
    name: yup
      .string("El nombre debe ser un string")
      .required("El nombre de la categoria es requerida"),
    description: yup
      .string("La descripción debe ser un string")
      .required("La descripción de la categoria es requerida"),
  });

  return (
    <div className="">
      {!notFound || !isEdit ? (
        <Formik
          validationSchema={categoriesSchema}
          enableReinitialize={true}
          initialValues={category}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className=" container mx-auto shadow-xl py-3">
              <div className="grid grid-cols-1 sm:mx-24">
                <InputForm 
                    errors={errors.name}
                    touched={touched.name}
                    name="name"
                    placeholder="Titulo"
                    type="text"
                    disabled={isDisabled}
                  />
               <InputForm 
                    errors={errors.description}
                    touched={touched.description}
                    name="description"
                    placeholder="Descripción"
                    type="text"
                    as="textarea"
                    disabled={isDisabled}
                  />
              </div>
              <SendButton isSubmitting={isSubmitting} text={`${isEdit ? "Modificar": "Crear"}`} />
            </Form>
          )}
        </Formik>
      ) : (
        <NotFoundComponent title={"No existe esa categoria"} />
      )}
      {error && <ErrorAlert setError={setError} />}
      {successMsg && (
        <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
      )}
    </div>
  );
}

export default CUCategoriesForm;
