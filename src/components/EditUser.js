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
        first_name: "",
        last_name: "",
        roleId: "",
        
      };

      

    const validationSchema = Yup.object({
        first_name: Yup.string().required("Por favor ingresa el nuevo nombre"),
        last_name: Yup.string().required("Por favor ingresa el nuevo apellido"),
        roleId: Yup.number()
        .required("El ID es requerido")
        .positive("El ID debe ser positivo")
        .min(1)
        .max(3)
        .integer("El ID no puede ser decimal")
       
      });

      const onSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm();
      }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className=" container mx-auto px-5" >
                        <div className=" w-full">
                            <Field className={`${styles.field} h-16`} name="first_name" placeholder="Nombre" type="text" />
                            <ErrorMessage component={ErrorComponent} name="first_name" />
                        </div>
                        <div className="w-full">
                            <Field className={`${styles.field} h-16`} name="last_name" placeholder="Apellido" type="text" />
                            <ErrorMessage component={ErrorComponent} name="last_name" />
                        </div>
                        <div className="w-full">
                            <Field className={`${styles.field} h-16`} name="roleId" placeholder="ID" type="number" />
                            <ErrorMessage component={ErrorComponent} name="roleId" />
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