import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import InputForm from "../Shared/Forms/InputForm";
import * as Yup from "yup";
import organizationService, {
  editOrganization,
  postOrganization,
} from "../../services/organization";
import UploadImageComponent from "../Shared/Others/UploadImageComponent";
import { useNavigate, useParams } from "react-router";
import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";
import CUHeader from "../Shared/Containers/CUHeader";
import CenterResponsiveContainer from "../Shared/Containers/CenterResponsiveContainer";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import AddButton from "../Shared/Buttons/Addbutton";
import TwoColsForm from "../Shared/Containers/TwoColsForm";

function CUOrganizationForm({ isEdit }) {
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  let navigate = useNavigate();

  let initialValues = {
    name: "",
    email: "",
    phone: "",
    welcomeText: "",
    address: "",
    image: "",
  };
  const [Org, setOrg] = useState(initialValues);

  function handleSubmit(values, { resetForm, setSubmitting }) {
    if (!isEdit) {
      postOrganization(values)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resetForm();
            setSuccessMsg("La organización ha sido creada");
            navigate(-1);
          } else {
            setError(true);
            setSubmitting(false);
          }
        })
        .catch((err) => err);
    } else if (isEdit) {
      editOrganization(values, id)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resetForm();
            setSuccessMsg("La organización ha sido actualizada");
            navigate(-1);
          } else {
            setError(true);
            setSubmitting(false);
          }
        })
        .catch((err) => err);
    }
  }
  //use effects
  useEffect(() => {
    if (isEdit) {
      organizationService
        .getOrganizationData(id)
        .then((res) => {
          if (res?.status === 200 || res?.status === 304) {
            setOrg(res?.data?.organization);
          } else {
            setNotFound(true);
          }
        })
        .finally(setIsDisabled(false));
    }
  }, [id, isEdit]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Por favor ingresa tu nombre"),
    email: Yup.string()
      .email(
        "Por favor ingresa un formato de email válido 'ejemplo@correo.com'"
      )
      .required("Por favor ingresa un email"),
    address: Yup.string().required("Por favor ingresa una dirección"),
    phone: Yup.number("El telefono debe ser un numero")
      .positive("Por favor ingresa solo numeros")
      .integer("Por favor ingresa solo numeros")
      .min(10000000, "Debe ingresar un mínimo de 8 números")
      .max(999999999999, "Debe ingresar un maximo de 13 números ")
      .required("Por favor ingresa un teléfono"),
    welcomeText: Yup.string().required("Por favor ingresa un mensaje"),
    image: Yup.mixed().required("El archivo es requerido"),
  });

  return (
    <CenterResponsiveContainer>
      <CUHeader
        title={`${isEdit ? "Editar Organización" : "Crear Organización"}`}
        name={"organizacion"}
      />
      {!notFound || !isEdit ? (
        <>
          <Formik
            initialValues={Org}
            enableReinitialize={true}
            validationSchema={validationSchema}
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
                      errors={errors.email}
                      touched={touched.email}
                      name={"email"}
                      placeholder={"Correo Electrónico"}
                      type={"text"}
                    />
                    <InputForm
                      errors={errors.phone}
                      touched={touched.phone}
                      name={"phone"}
                      placeholder={"Teléfono"}
                      type={"text"}
                    />
                    <InputForm
                      errors={errors.address}
                      touched={touched.address}
                      name={"address"}
                      placeholder={"Dirección"}
                      type={"text"}
                    />
                    <InputForm
                      errors={errors.welcomeText}
                      touched={touched.welcomeText}
                      name={"welcomeText"}
                      placeholder={"Mensaje"}
                      type={"text"}
                      as={"textarea"}
                    />
                  </div>
                  <div className="w-full my-auto">
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
    </CenterResponsiveContainer>
  );
}

export default CUOrganizationForm;
