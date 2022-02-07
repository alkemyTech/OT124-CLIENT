
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Dropzone from 'react-dropzone'
import { useParams } from "react-router";
import { Organization } from "../../../services/backOffice";
import { useDispatch } from "react-redux";


function EditOrganization() {
    const styles = {
        field: "w-full border-b-4 border-[#9ac9fb] my-2 p-2 outline-none",
        button: "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-96",
        error: " text-red-500 text-lg",
        send: "text-red-500 text-lg bg-red-300	rounded-md	scroll-p-2 border-b-4 border-red-800"
    }

    const ErrorComponent = (props) => <p className={styles.error} >{props.children}</p>;
    //const [sender,setSender]= useState(false)
  const  dispatch = useDispatch()
    const {id} =useParams()
    const initialValues = {
        name: "",
        sender: false

    };
    useEffect(() => {
        dispatch(Organization(id))
    },[])

    const validationSchema = Yup.object({
        name: Yup.string().required("Por favor ingresa el nombre de la organización"),
        sender: Yup.bool().oneOf([true], 'una vez creado el endpoint de editar organizaciones, modificar este componente y crear un servicio para modificar ')
    });
    const MessagePopup = (props) => <p className={`${styles.send}`} >{props.children} </p>

    const onSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm();
        initialValues.sender = true;


    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className=" container mx-auto px-5" >
                <ErrorMessage component={MessagePopup} name="sender" />
                <div className=" w-full">
                    <Field className={`${styles.field} h-16`} name="name" placeholder="Nombre" type="text" />
                    <ErrorMessage component={ErrorComponent} name="name" />
                </div>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>deja un archivo jpg, png o gif</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <div className="flex justify-center my-4">
                    <button className={`${styles.button}`} type="submit">
                        Enviar
                    </button>
                </div>
            </Form>
        </Formik>
    )

}

export default EditOrganization;
