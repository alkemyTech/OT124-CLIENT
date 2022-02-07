import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";


const styles = {
    field: "w-full border-b-4 border-[#9ac9fb] my-2 p-2 outline-none", 
    button: "bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 hover:border-transparent rounded py-2 mt-2 px-4 w-96",
    error: " text-red-500 text-lg"
  }

const ErrorComponent = (props) => <p className={styles.error} >{props.children}</p>;

export default function ContactForm (props){        

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };

    const validationSchema = Yup.object({
        name: Yup.string().required("Por favor ingresa tu nombre"),
        email: Yup.string().email("Por favor ingresa un formato de email válido 'ej@correo.com'").required("Por favor ingresa un email"),
        phone: Yup.string()
          .matches(/\d+$/, "Por favor ingresa un formato de telefono válido y sin guiones")
          .min(8, "Debe ingresar un mínimo de 8 números.")
          .required("Por favor ingresa un teléfono"),
        message: Yup.string().required("Por favor ingresa un mensaje"),
      });

      const onSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm();
        
      }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className=" container mx-auto px-5" >
                        <div className=" w-full">
                            <Field className={`${styles.field} h-16`} name="name" placeholder="Nombre" type="text" />
                            <ErrorMessage component={ErrorComponent} name="name" />
                        </div>
                        <div className="w-full">
                            <Field className={`${styles.field} h-16`} name="email" placeholder="Correo Electrónico" type="text" />
                            <ErrorMessage component={ErrorComponent} name="email" />
                        </div>
                        <div className="w-full">
                            <Field className={`${styles.field} h-16`} name="phone" placeholder="Teléfono" type="tel" />
                            <ErrorMessage component={ErrorComponent} name="phone" />
                        </div>
                    <div className="w-full">
                            <Field
                            as="textarea"
                            className={`${styles.field} h-32 resize-none`}
                            name="message"
                            placeholder="Mensaje"
                            />
                            <ErrorMessage component={ErrorComponent} name="message" />
                    </div>
                <div className="flex justify-center my-4">
                    <button className={`${styles.button}`} type="submit">
                    Enviar
                    </button>
                </div>
            </Form>
    </Formik>
    )
}