import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import { createMember, updateMember, getMember } from "../../services/members";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import InputForm from "../Shared/Forms/InputForm";
import OneColForm from "../Shared/Containers/OneColForm";
import AddButton from "../Shared/Buttons/Addbutton";
import Spinner from "../Shared/Loaders/Spinner";

function CUMembersForm(props) {
  const history = useNavigate();
  const { isEdit } = props;
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const initialValues = {
    name: "",
    image: "",
  };
  const [aNew, setANew] = useState(initialValues);
  useEffect(() => {
    getMember(id)
      .then((res) => {
        if (res.status === 200) {
          setANew(res?.data?.member);
        } else {
          setNotFound(true);
        }
      })
      .finally(()=>{
        setIsDisabled(false)
        setTimeout(() => setIsLoading(false), 500);
      });
  }, [id]);

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    if (isEdit) {
      updateMember(values, id).then((res) => {
        if (res.status === 200) {
          setANew(initialValues);
          resetForm();
          setSuccessMsg("El miembro ha sido modificado exitosamente");
          history("/backoffice/miembros");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    } else {
      createMember(values).then((res) => {
        if (res.status === 201) {
          setANew(initialValues);
          resetForm();
          setSuccessMsg("El miembro ha sido creado exitosamente");
          history("/backoffice/miembros");
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
      .required("El nombre del miembro es requerido"),
    image: yup.mixed().required("El archivo es requerido"),
  });

  if (isLoading){
    return <Spinner />
  }

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
            <Form className="">
              <OneColForm>
                <div className="my-2">
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
                <InputForm
                  errors={errors.name}
                  touched={touched.name}
                  name="name"
                  placeholder="Nombre"
                  type="text"
                  disabled={isDisabled}
                />
              </OneColForm>
              <AddButton
                isSubmitting={isSubmitting}
                text={`${isEdit ? "Modificar" : "Crear"}`}
              />
            </Form>
          )}
        </Formik>
      ) : (
        <NotFoundComponent title={"No existe ese miembro"} />
      )}
      {error && <ErrorAlert setError={setError} />}
      {successMsg && (
        <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
      )}
    </div>
  );
}

export default CUMembersForm;
