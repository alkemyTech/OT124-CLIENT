import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Formik, Form } from "formik";
import usersServices from '../../../services/users';
import * as yup from 'yup';
import ErrorAlert from '../../../components/Shared/Alerts/ErrorAlert';
import SuccessAlert from '../../../components/Shared/Alerts/SuccessAlert';
import InputForm from '../../../components/Shared/Forms/InputForm';
import SendButton from '../../../components/Shared/Buttons/SendButton';
import NotFoundComponent from '../../../components/Shared/Others/NotFoundComponent';
import CenterResponsiveContainer from '../../../components/Shared/Containers/CenterResponsiveContainer';
import CUHeader from '../../../components/Shared/Containers/CUHeader';
import OneColForm from '../../../components/Shared/Containers/OneColForm';
import SelectForm from '../../../components/Shared/Forms/SelectForm';
import AddButton from '../../../components/Shared/Buttons/Addbutton';

export default function BackofficeEditUsers() {
    const [ notFound, setNotFound ] = useState(false);
    const [ isDisabled, setIsDisabled ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ successMsg, setSuccessMsg ] = useState("");
    
    const { id } = useParams();

    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    };

    const [ user, setUser ] = useState(initialValues);

    const onSubmit = (values, { setSubmitting, resetForm }) => {
      usersServices.updateUser(id, values).then(res => {
        if (res.status === 200) {
          setUser(initialValues);
          resetForm();
          setSuccessMsg("El usuario ha sido modificado exitosamente");
        } else {
          setError(true);
          setSubmitting(false);
        }
      });
    }

    useEffect(() => {
        usersServices.getUser(id)
          .then(res => {
            if (res.status === 200) {
              const payload = {
                firstName: res?.data?.user?.firstName,
                lastName: res?.data?.user?.lastName,
                email: res?.data?.user?.email,
                role: res?.data?.user?.role,
              }
              setUser(payload);
            } else {
              setNotFound(true);
            }
          })
          .finally(setIsDisabled(false));
    }, [id]);

    const userSchema = yup.object().shape({
      firstName: yup.string('El nombre debe ser un string').required('El nombre es requerido'),
      lastName: yup.string('El apellido debe ser un string').required('El apellido es requerido'),
      email: yup.string().email('Formato de email inválido').required('El email es requerido'),
      role: yup.string().test('match', 'Rol inválido: (user o admin)', role => role === 'user' || role === 'admin' ? true : false)
    });

    const options = [
      {
        id: "user",
        name: "user",
      },
      {
        id: "admin",
        name: "admin",
      }

    ]
      

    return (
        <CenterResponsiveContainer>
                
                <CUHeader title={"Modificar un usuario"} />
                {!notFound ? (
                  <Formik
                    validationSchema={userSchema}
                    enableReinitialize={true}
                    initialValues={user}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <Form className="">
                        <OneColForm>
                          <InputForm 
                            errors={errors.firstName}
                            touched={touched.firstName}
                            name="firstName"
                            placeholder="Nombre"
                            type="text"
                            disabled={isDisabled}
                          />
                          <InputForm 
                            errors={errors.lastName}
                            touched={touched.lastName}
                            name="lastName"
                            placeholder="Apellido"
                            type="text"
                            disabled={isDisabled}
                          />
                          <InputForm 
                            errors={errors.email}
                            touched={touched.email}
                            name="email"
                            placeholder="Email"
                            type="text"
                            disabled={isDisabled}
                          />
                          <SelectForm
                            errors={errors.role}
                            touched={touched.role}
                            as="select"
                            name="role"
                            disabled={isDisabled}
                            options={options}
                            optLabel={"Seleccionar Rol"}
                          />
                        </OneColForm>
                        <AddButton isSubmitting={isSubmitting} text={'Modificar'} isEdit={true} />
                      </Form>
                    )}
                  </Formik>)
                    : 
                  <NotFoundComponent title={"No existe ese usuario"} />
                }
                  {error && <ErrorAlert setError={setError} />}
                  {successMsg && <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />}
                  </CenterResponsiveContainer>
    );
}