import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import { createNew, getNew, updateNew } from "../../services/news";
import * as yup from "yup";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import InputForm from "../Shared/Forms/InputForm";
import AddButton from "../Shared/Buttons/Addbutton";
import TwoColsForm from "../Shared/Containers/TwoColsForm";
import SelectForm from "../Shared/Forms/SelectForm"
import {getAllCategories} from "../../services/categories";

function CUNewsForm(props) {
  const { isEdit } = props;
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [options, setOptions] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllCategories();
                setOptions(response?.data?.categories)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

  const initialValues = {
    name: "",
    content: "",
    categoryId: "",
    type: "news",
    image: "",
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
            <Form>
              <TwoColsForm >
                  <div className="sm:w-[500px]">
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
                    <SelectForm
                      errors={errors.categoryId}
                      touched={touched.categoryId}
                      name="categoryId"
                      placeholder="Categoria"
                      type="number"
                      as="select"
                      disabled={isDisabled}
                      options={options}
                    />
                  </div>
                  <div className="my-auto">
                    <UploadImageComponent
                      setFieldValue={setFieldValue}
                      setFieldError={setFieldError}
                      file={values?.image}
                      disabled={isDisabled}
                      error={errors.image}
                      touched={touched.image}
                    />
                  </div>
                </TwoColsForm>
                <AddButton isEdit={isEdit} isSubmitting={isSubmitting} />
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
