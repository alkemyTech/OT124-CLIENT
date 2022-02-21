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

    return (
        <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
            <div className="sm:px-32 px-2 sm:w-2/3">
                <header className='flex sm:flex-row flex-col px-24'>
                    <div className="flex flex-wrap items-center justify-center">
                      <Link
                        className="bg-sky-500 hover:bg-transparent hover:text-sky-500 hover:border-sky-500 hover:border text-white font-bold py-3 px-6 rounded transform hover:scale-110 ease-in duration-300"
                        to="/backoffice/usuarios"
                      >
                        <span className="pr-2">⬅</span>
                        Volver
                      </Link>
                    </div>
                    <div className="text-center w-full">
                      <h1 className="text-3xl my-5 text-center text-sky-500">Modificar usuario</h1>
                    </div>
                </header>
                
                {!notFound ? (
                  <Formik
                    validationSchema={userSchema}
                    enableReinitialize={true}
                    initialValues={user}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <Form className=" container mx-auto shadow-xl py-3">
                        <div className="grid grid-cols-1 sm:mx-24">
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
                          <InputForm 
                            errors={errors.role}
                            touched={touched.role}
                            name="role"
                            placeholder="Rol"
                            type="text"
                            disabled={isDisabled}
                          />
                        </div>
                        <SendButton isSubmitting={isSubmitting} text={'Modificar'} />
                      </Form>
                    )}
                  </Formik>)
                    : 
                  <NotFoundComponent title={"No existe ese usuario"} />
                }
                  {error && <ErrorAlert setError={setError} />}
                  {successMsg && <SuccessAlert successMsg={successMsg} setSuccessMsg={setSuccessMsg} />}
            </div>
        </div>
    );
}