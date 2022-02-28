import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Formik, Form } from "formik";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import * as yup from "yup";
import {
  createActivities,
  getActivity,
  updateActivities,
} from "../../services/activities";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import InputForm from "../Shared/Forms/InputForm";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import AddButton from "../Shared/Buttons/Addbutton";
import TwoColsForm from "../Shared/Containers/TwoColsForm";
import Spinner from "../Shared/Loaders/Spinner";

function CUActivitiesForm(props) {
  const navigate = useNavigate();
  const { isEdit } = props;
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const initialValues = {
    name: "",
    content: "",
    image: "",
    lastimage: "",
  };
  const [activity, setActivity] = useState(initialValues);
  useEffect(() => {
    getActivity(id)
      .then((res) => {
        if (res.status === 200) {
          let { activity: resActivity } = res.data;
          setActivity(resActivity);
        } else {
          setNotFound(true);
        }
      })
      .finally(()=>{
        setIsDisabled(false)
        setTimeout(() => setIsLoading(false), 500);
      });
  }, [id]);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (isEdit) {
      updateActivities(id, values).then((res) => {
        if (res.status === 200) {
          setActivity(initialValues);
          resetForm();
          setSuccessMsg("La actividad ha sido modificada exitosamente");
          navigate("/backoffice/actividades");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    } else {
      createActivities(values).then((res) => {
        if (res.status === 201) {
          setActivity(initialValues);
          resetForm();
          setSuccessMsg("La actividad ha sido creada exitosamente");
          navigate("/backoffice/actividades");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    }
  };

  const activitiesSchema = yup.object().shape({
    name: yup
      .string("El titulo debe ser un texto")
      .required("El titulo de la actividad es requerido"),
    content: yup
      .string("El contenido debe ser un texto")
      .required("El contenido de la actividad es requerido"),
    image: yup.mixed().required("El archivo es requerido"),
  });

  if (isLoading){
    return <Spinner />
  }

  return (
    <div>
      {!notFound || !isEdit ? (
        <Formik
          validationSchema={activitiesSchema}
          enableReinitialize={true}
          initialValues={activity}
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
              <TwoColsForm>
                <div className=" order-last sm:order-first sm:w-[400px]">
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
                    high={true}
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
                  />
                </div>
              </TwoColsForm>
              <AddButton isEdit={isEdit} isSubmitting={isSubmitting} />
            </Form>
          )}
        </Formik>
      ) : (
        <NotFoundComponent title={"No existe esa actividad"} />
      )}
      {error && <ErrorAlert setError={setError} />}
      {successMsg && (
        <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
      )}
    </div>
  );
}

export default CUActivitiesForm;
