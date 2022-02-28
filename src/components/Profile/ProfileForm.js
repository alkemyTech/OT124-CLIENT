import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"
import { profileUpdate } from "../../services/Profile";

const ProfileSchema = Yup.object().shape({
    firstname: Yup.string().required("Obligatorio*"),
    lastname: Yup.string().required("Obligatorio*"),
    email: Yup.string().required("Obligatorio*").email("Datos ingresados no son validos*").max(255),
  });

export default function ProfileForm({popUp, setPopUp, profile}) {

    const navigate = useNavigate();
    const [showErrMsg, setShowErrMsg] = useState();
    
    function getErrMsg(errMsg) {
        let message;
        switch (errMsg) {
          case "Email already exist": {
            message = "El email ingresado ya existe";
            break;
          }
          default: {
            message = "Algo salió mal, intentelo más tarde";
          }
        }
        return message;
      }

      async function handleSubmit(values, { setSubmitting }) {
        setShowErrMsg();
        const { firstname, lastname, email } = values;
        const res = await profileUpdate(firstname, lastname, email);
    
        if (res.status === 200) {
          navigate("/mi-perfil");
        } else {
            setShowErrMsg(getErrMsg(res.response.data.errors));
            setSubmitting(false);
        }
      }


    return (
    <Formik
        initialValues={{ firstname: "", lastname: "", email: "" }}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
    >
        {({ errors, touched }) => (
            <Form className=" grid gap-4 p-1 flex-col row-start-2 row-end-4 grid-cols-2">
                
                    <label htmlFor="firstname" className=" md:w-1/2 md:justify-self-end justify-self-center" >Nombre</label>
                    <Field
                        className="text-black p-1 md:w-1/2 bg-slate-100"
                        placeholder="Nombre"
                        autocomplete="off"
                        id="firstname"
                        name="firstname"
                        type="firstname"
                        values={profile === undefined ? null : profile.firstName}
                    />
                    {errors.name && touched.name ? (
                        <ErrorMessage
                            className="text-red-500 text-sm absolute ml-24"
                            component="a"
                            name="firstname"
                        />
                    ) : null}
                    
                    <label htmlFor="lastname" className=" md:w-1/2 md:justify-self-end justify-self-center">Apellido</label>
                    <Field
                        className="text-black p-1 md:w-1/2 bg-slate-100"
                        placeholder="Apellido"
                        autocomplete="off"
                        id="lastname"
                        name="lastname"
                        type="lastname"
                        values={profile === undefined ? null : profile.lastName}
                    />
                    {errors.name && touched.name ? (
                        <ErrorMessage
                            className="text-red-500 text-sm absolute mt-12 ml-24"
                            component="a"
                            name="lastname"
                        />
                    ) : null}
                    <label htmlFor="email" className=" md:w-1/2 md:justify-self-end justify-self-center">Email</label>
                    <Field
                        className="text-black p-1 md:w-1/2 bg-slate-100"
                        placeholder="miemail@dominio.com"
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="email"
                        values={profile === undefined ? null : profile.email}
                    />
                    {errors.name && touched.name ? (
                        <ErrorMessage
                            className="text-red-500 text-sm absolute mt-24 ml-24"
                            component="a"
                            name="email"
                        />
                    ) : null}
                    <button type="submit" onClick={() => handleSubmit()} className=" mt-4 col-start-1 col-end-3 max-w-fit md:max-w-fit h-12 p-2 justify-self-center  border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">CONFIRMAR</button>
                
            </Form>
        )}
    </Formik>
    )
}

// <input placeholder="First name" className=" text-black p-1 md:w-1/2 bg-slate-100"></input>