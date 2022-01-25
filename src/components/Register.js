import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Register() {
    const [ formData, setFormData ] = useState({});

    useEffect(() => {
        alert(JSON.stringify(formData, null, 2));
    }, [formData])

    return (
        <Formik
            initialValues={{ name: '', surname: '', email: '', password: '' }}
            validate={values => {
                const errors = {};

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!values.name) {
                    errors.name = 'Required';
                } else if (!values.surname) {
                    errors.surname = 'Required';
                } else if (!values.password) {
                    errors.password = 'Required';
                }

                if (values.password.length < 6) errors.password = 'Password must have more than 6 characters';
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Invalid email address';
                
                return errors;
        }}
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
