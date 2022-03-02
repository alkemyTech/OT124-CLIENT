import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { createSlide, getAllSlides, getSlide, updateSlide } from '../../services/slides';
import ErrorAlert from '../Shared/Alerts/ErrorAlert';
import SuccessAlert from '../Shared/Alerts/SuccessAlert';
import AddButton from '../Shared/Buttons/Addbutton';
import OneColForm from '../Shared/Containers/OneColForm';
import InputForm from '../Shared/Forms/InputForm';
import Spinner from '../Shared/Loaders/Spinner'
import NotFoundComponent from '../Shared/Others/NotFoundComponent';
import UploadImageComponent from '../Shared/Others/UploadImageComponent'
import * as yup from "yup";
import { useNavigate, useParams } from 'react-router';
import SelectForm from '../Shared/Forms/SelectForm';

const Alloptions =
    new Array(10)
      .fill(1, 0, 10 - 1)
      .map((e, i) => i + 1)

function CUSlidesForm({isEdit}) {
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState(true);
  let navigate = useNavigate();

  const initialValues = {
    text: "",
    order: "",
    image: "",
  };

  const [slide, setSlide] = useState(initialValues);

  function handleSubmit(values, { resetForm, setSubmitting }) {
    if (!isEdit) {
      createSlide(values)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resetForm();
            setSuccessMsg("El Slide ha sido creado exitosamente");
            navigate(-1);
          } else {
            setError(true);
            setSubmitting(false);
          }
        })
        .catch((err) => err);
    } else if (isEdit) {
      updateSlide(values, id)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resetForm();
            setSuccessMsg("El Slide ha sido modificado exitosamente");
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
      getSlide(id)
        .then((res) => {
          if (res?.status === 200 || res?.status === 304) {
            let resItem= res?.data?.slide
            resItem.key = resItem?.image?.key
            setSlide(resItem);
          } else {
            setNotFound(true);
          }
        })
        .finally(()=>{
          setIsDisabled(false)
          setTimeout(() => setIsLoading(false), 500);
        })
        getAllSlides('').then(
            res=>{
                const resOrders = res?.data?.slides?.map(e=>e.order)
                const optionsFiltered = Alloptions.filter(e=>!resOrders.includes(e))
                const objOptions = optionsFiltered.map(e=>{
                    const opt = {
                        id: e,
                        name: e
                    }
                    return { ...opt }
                })
                setOptions(objOptions)
            }
        );
  }, [id]);

  const slidesSchema = yup.object().shape({
    text: yup
      .string("El texto debe ser un string")
      .required("El texto del slide es requerido"),
    order:  yup  
    .number("El orden debe ser un numero")
    .positive("Por favor ingresa solo numeros")
    .integer("Por favor ingresa solo numeros")
    .min(1, "Debe ingresar un máximo de 1 número")
    .max(9, "Debe ingresar un máximo de 1 número ")
    .required("Por favor ingresa un orden"),
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
                initialValues={slide}
                enableReinitialize={true}
                validationSchema={slidesSchema}
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
                    <OneColForm>
                      <div className="sm:w-[500px]">
                        <UploadImageComponent
                          setFieldValue={setFieldValue}
                          setFieldError={setFieldError}
                          file={values?.image}
                          disabled={isDisabled}
                          error={errors.image}
                          touched={touched.image}
                        />
                        <InputForm
                          errors={errors.text}
                          touched={touched.text}
                          name={"text"}
                          placeholder={"Texto"}
                          type={"text"}
                        />
                        <SelectForm
                          options={options}
                          errors={errors.order}
                          touched={touched.order}
                          name={"order"}
                          placeholder={"Orden"}
                          type={"number"}
                          as={"select"}
                          optLabel={"Seleccionar orden"}
                        />
                      </div>
                    </OneColForm>
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
            <NotFoundComponent title={"No existe ese slide"} />
          )}
        </>
      );
}

export default CUSlidesForm;
