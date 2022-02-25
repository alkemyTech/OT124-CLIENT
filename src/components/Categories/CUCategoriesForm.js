import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
  createCategory,
  getCategory,
  updateCategory,
} from "../../services/categories";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import InputForm from "../Shared/Forms/InputForm";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import AddButton from "../Shared/Buttons/Addbutton";
import OneColForm from "../Shared/Containers/OneColForm";

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
            <Form>
              <OneColForm>
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
                <AddButton isEdit={isEdit} isSubmitting={isSubmitting} />
              </OneColForm>
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
