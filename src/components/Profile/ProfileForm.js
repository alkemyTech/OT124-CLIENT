import React, { useState, useEffect } from "react";
import { profileUpdate} from "../../services/Profile"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setUserData } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import ErrorAlert from "../Shared/Alerts/ErrorAlert";
import SuccessAlert from "../Shared/Alerts/SuccessAlert";

const styles = {
    field:
      " shadow shadow-slate-300 hover:shadow-none bg-gray-100 border transition hover:border-sky-500 ease-linear duration-300 my-2 p-4 outline-none transform md:hover:-translate-x-2",
    errorsField:
      "w-full shadow-md bg-gray-100 border border-red-500 my-2 p-4 outline-none",
    button:
      "bg-transparent font-semibold hover:text-white border hover:border-transparent rounded py-2 mt-2 w-80 transform hover:scale-102 easy-in duration-300 mx-4",
    error:
      " text-red-500 text-sm bg-red-200 text-center border border-red-500 mt-2 rounded-sm p-2 shadow shadow-red-300",
};
const ErrorComponent = (props) => (
    <p className={styles.error + props.center}>{props.children}</p>
);

export default function ProfileForm(params) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    
    const {
        firstName = firstName,
        lastName = lastName,
        email = email,
        id = id,
        editing = editing,
        setEditing = setEditing
    } = params

    return(
        <Formik
            initialValues={{ firstName: firstName, lastName: lastName, email: email }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Ingresar un email';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'El formato no es correcto';
                }
                return errors;
              }}
            onSubmit={(values, { setSubmitting }) => {
                async function updatingValue(id, values  ) {
                    try {
                        const response = await profileUpdate(id, values);
                        if (response.status === 201 || response.status === 200) {
                            setSuccessMsg("El usuario ha sido modificado exitosamente.");
                        } else {
                            setError(true)
                        }
                    } catch (e) {
                        console.error(e);
                    }
                    };
                updatingValue(id, values)
                setSubmitting(false);
            }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
        }) => (
            <>
                <h3 className=" font-semibold text-xl mx-4">Editar Usuario</h3>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                    className={styles.field}
                    type="text"
                    name="firstName"
                    placeholder={firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                />
                {errors.firstName && touched.firstName && errors.firstName}
                <input
                    className={styles.field}
                    type="text"
                    name="lastName"
                    placeholder={lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                {errors.lastName && touched.lastName && errors.lastName}
                <input
                    className={styles.field}
                    type="email"
                    name="email"
                    placeholder={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <ErrorMessage component={ErrorComponent} name="email" />
                <div className="flex flex-row">
                    <button onClick={() => setEditing(false)} className=" bg-transparent font-semibold hover:text-white border hover:border-transparent rounded py-2 mt-2 w-80 transform hover:scale-102 easy-in duration-300 mx-4 hover:bg-red-500 text-red-500 border-red-500">
                        Volver
                    </button>
                    <button className=" bg-transparent font-semibold hover:text-white border hover:border-transparent rounded py-2 mt-2 w-80 transform hover:scale-102 easy-in duration-300 mx-4 hover:bg-sky-500 text-sky-500 border-sky-500" type="submit" disabled={isSubmitting}>
                        Confirmar
                    </button>

                </div>
                {error && <ErrorAlert setError={setError} />}
                {successMsg && (
                    <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
                )}
                </form>
            
            </>
          )}
   </Formik>

    )    
}