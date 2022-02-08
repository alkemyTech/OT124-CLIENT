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
} from "../services/activities";

const activitiesSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
});

const ActivitiesForm = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [activities, setactivities] = useState([]);

  const onSubmit = (values, { resetForm }) => {
    if (isEdit) {
      updateActivities(values, id)
        .then((res) => {
          setactivities({
            name: "",
            content: "",
          });
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createActivities(values)
        .then((res) => {
          setactivities({
            name: "",
            content: "",
          });

          resetForm();
        })
        .catch((err) => {
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
        });
    } else {
      setIsEdit(false);
      setactivities({ name: "", content: "" });
    }
  }, [id]);

  return (
    <>
      <h1 className=" text-3xl my-5 text-center text-[#9ac9fb]">
        {isEdit ? "Modificar Actividad" : "Crear nueva Actividad"}
      </h1>
      <Formik
        className="container max-w-lg mx-auto flex flex-col justify-center shadow-lg sm:py-40"
        validationSchema={activitiesSchema}
        enableReinitialize={true}
        initialValues={activities}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="container flex flex-col mx-auto shadow-xl p-6 m-5">
            <ErrorMessage
              name="name"
              component="div"
              className="bg-red-500 text-white p-2 text-center"
            />
            <Field
              name="name"
              placeholder="Nombre Actividad"
              type="text"
              className="w-100 p-4 m-5"
              value={values.name}
            />

            <ErrorMessage
              name="content"
              component="div"
              className="bg-red-500 text-white p-2 text-center"
            />
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

            {/**Botones */}
            <div className="flex justify-end items mt-10 mx-auto">
              <button
                disabled={isSubmitting}
                className="bg-green-600 px-5 py-2 mr-5 rounded-md text-white"
                type="submit"
              >
                {!isEdit ? "Crear" : "Modificar"}
              </button>
              <Link
                to={`/backoffice/actividades`}
                className="bg-gray-600 px-5 py-2 mr-5 rounded-md text-white"
              >
                Cancelar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ActivitiesForm;
