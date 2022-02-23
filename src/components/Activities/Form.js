import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Link, useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createActivities,
  updateActivities,
  getActivity,
} from "../../services/activities";

import { useNavigate } from "react-router-dom";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import SpinSVGButton from "../Shared/Loaders/SpinSVGButton";

const styles = {
  field:
    "w-full shadow-md bg-gray-100 border-b-4 transition hover:border-[#9ac9fb] ease-linear duration-300 my-2 p-4 outline-none transform hover:-translate-x-3",
  errorsField:
    "w-full shadow-md bg-gray-100 border  border-red-500 my-2 p-4 outline-none",
  button:
    "bg-transparent flex items-center justify-center hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 px-4 w-96 transform hover:scale-110 ease-in duration-300",
  error: " text-red-500 text-lg",
};

const ErrorComponent = (props) => (
  <p className={styles.error + props.center}>{props.children}</p>
);

const activitiesSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
});

const ActivitiesForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [activities, setactivities] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
    if (isEdit) {
      updateActivities(id, values)
        .then((res) => {
          setSuccessMsg("Actividad actualizada correctamente");
          resetForm();
          navigate("/backoffice/actividades");
        })
        .catch((err) => {
          setSubmitting(false);
          console.log(err);
        });
    } else {
      createActivities(values)
        .then((res) => {
          setSuccessMsg("Actividad creada correctamente");
          resetForm();
          navigate("/backoffice/actividades");
        })
        .catch((err) => {
          setSubmitting(false);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (id) {
      getActivity(id)
        .then((res) => {
          console.log(res);
          setactivities(res.data.activity);
          setIsEdit(true);
        })
        .catch((err) => {
          console.log(err);
          setIsEdit(false);
        })
        .finally(setIsDisabled(false));
    } else {
      setIsEdit(false);
      setactivities({ name: "", content: "", image: "" });
    }
  }, [id]);

  return (
    <div className="container max-w-lg mx-auto flex flex-col">
      {error && <ErrorAlert setError={setError} />}
      {successMsg && (
        <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
      )}
      <Link
        className="mx-auto bg-sky-500 hover:bg-transparent hover:text-sky-500 hover:border-sky-500 hover:border text-white font-bold py-3 px-6 rounded transform hover:scale-110 ease-in duration-300"
        to="/backoffice/actividades"
      >
        <span className="pr-2">⬅</span>
        Volver
      </Link>
      <h1 className="text-2xl  md:text-3xl my-5 text-center text-[#9ac9fb]">
        {isEdit ? "Modificar Actividad" : "Crear nueva Actividad"}
      </h1>
      <Formik
        validationSchema={activitiesSchema}
        enableReinitialize={true}
        initialValues={activities}
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
          <Form className="container flex flex-col mx-auto shadow-xl p-6 m-5">
            <ErrorMessage component={ErrorComponent} name="name" />
            <Field
              name="name"
              placeholder="Nombre Actividad"
              type="text"
              onChange={(e) => setFieldValue("name", e.target.value)}
              className={`${
                errors.name && touched.name ? styles.errorsField : styles.field
              } h-16`}
            />

            <ErrorMessage component={ErrorComponent} name="content" />
            <CKEditor
              id="content"
              name="content"
              editor={ClassicEditor}
              data={values.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setactivities({ ...values, content: data });
                setFieldValue("content", data);
              }}
            />

            {/* Upload Image  */}
            <div className="w-full my-6">
              <ErrorMessage
                center=" text-center"
                component={ErrorComponent}
                name="image"
              />
              <UploadImageComponent
                setFieldValue={setFieldValue}
                setFieldError={setFieldError}
                file={values?.image}
                keyFile={values?.key}
                disabled={isDisabled}
                error={errors.image}
                touched={touched.image}
              />
            </div>

            {/**Botones */}
            <div className="flex justify-end items mt-10 mx-auto">
              <button
                disabled={isSubmitting}
                className="bg-green-600 px-5 py-2 mr-5 rounded-md text-white"
                type="submit"
              >
                {isSubmitting && <SpinSVGButton />}
                {!isEdit ? "Crear" : "Modificar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ActivitiesForm;
