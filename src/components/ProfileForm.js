import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Required*"),
    subname: Yup.string().required("Required*"),
    email: Yup.string().required("Required*").email("Invalid email*").max(255),
  });

export default function ProfileForm({popUp, setPopUp}) {
    
    return (
    <Formik
        initialValues={{ name: "", subname: "", email: "" }}
        validationSchema={ProfileSchema}
        onSubmit={(values) => {
            // Send values
            console.log(values);
        }}
    >
        {({ errors, touched }) => (
            <Form className=" grid gap-4 p-1 flex-col row-start-2 row-end-4 grid-cols-2">
                
                    <label htmlFor="name" className=" md:w-1/2 md:justify-self-end justify-self-center" >Nombre</label>
                    <Field
                        className="text-black p-1 md:w-1/2 bg-slate-100"
                        placeholder="First name"
                        autocomplete="off"
                        id="name"
                        name="name"
                        type="name"
                    />
                    {errors.name && touched.name ? (
                        <ErrorMessage
                            className="text-red-500 text-sm absolute ml-24"
                            component="a"
                            name="name"
                        />
                    ) : null}
                    
                    <label htmlFor="subname" className=" md:w-1/2 md:justify-self-end justify-self-center">Apellido</label>
                    <Field
                        className="text-black p-1 md:w-1/2 bg-slate-100"
                        placeholder="Last name"
                        autocomplete="off"
                        id="subname"
                        name="subname"
                        type="subname"
                    />
                    {errors.name && touched.name ? (
                        <ErrorMessage
                            className="text-red-500 text-sm absolute mt-12 ml-24"
                            component="a"
                            name="subname"
                        />
                    ) : null}
                    <label htmlFor="email" className=" md:w-1/2 md:justify-self-end justify-self-center">Email</label>
                    <Field
                        className="text-black p-1 md:w-1/2 bg-slate-100"
                        placeholder="myemail@domain.com"
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="email"
                    />
                    {errors.name && touched.name ? (
                        <ErrorMessage
                            className="text-red-500 text-sm absolute mt-24 ml-24"
                            component="a"
                            name="email"
                        />
                    ) : null}
                    <button type="submit" onClick={() => setPopUp({visible:false, operation: "Null"})} className=" mt-4 col-start-1 col-end-3 max-w-fit md:max-w-fit h-12 p-2 justify-self-center  border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">CONFIRMAR</button>
                
            </Form>
        )}
    </Formik>
    )
}

// <input placeholder="First name" className=" text-black p-1 md:w-1/2 bg-slate-100"></input>