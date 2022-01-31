import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required'),
  surname: yup
    .string()
    .required('Required'),
  email: yup
    .string()
    .required('Required')
    .email("Invalid email")
    .max(255),
  password: yup
    .string()
    .required('Required')
    .min(6, "Too Short!")
    .max(50, "Too Long!")
});


export default function Register() {
    const [ formData, setFormData ] = useState({});

    useEffect(() => {
        alert(JSON.stringify(formData, null, 2));
    }, [formData])

    return (
        <Formik
            initialValues={{ name: '', surname: '', email: '', password: '' }}
            validationSchema={registerSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setFormData(values);
                  setSubmitting(false);
                }, 400);
            }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="name" />
              <ErrorMessage name="name" component="div" />

              <Field type="text" name="surname" placeholder="surname" />
              <ErrorMessage name="surname" component="div" />

              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />

              <Field type="password" name="password" placeholder="password" />
              <ErrorMessage name="password" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
    );
}
