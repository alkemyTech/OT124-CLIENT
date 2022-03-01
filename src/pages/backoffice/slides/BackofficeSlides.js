import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import InputForm from '../../../components/Shared/Forms/InputForm';
import CenterResponsiveContainer from '../../../components/Shared/Containers/CenterResponsiveContainer';
import UploadImageComponent from '../../../components/Shared/Others/UploadImageComponent';
import SendButton from '../../../components/Shared/Buttons/SendButton';
import { editOrganization } from '../../../services/organization';
import { selectOngData } from '../../../features/ongSlice';
import ErrorAlert from "../../../components/Shared/Alerts/ErrorAlert";
import SuccessAlert from "../../../components/Shared/Alerts/SuccessAlert";
import Spinner from "../../../components/Shared/Loaders/Spinner";
import { editOngWelcomeText } from '../../../features/ongSlice';
import { useDispatch } from 'react-redux';

export default function BackofficeSlides() {
    const dispatch = useDispatch();
    const initialValues = {
        welcomeText: ''
    };

    const [ ongData, setOngData ] = useState(initialValues);
    const [ error, setError ] = useState(false);
    const [ successMsg, setSuccessMsg ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isDisabled, setIsDisabled ] = useState(true);

    const ong = useSelector(selectOngData);

    useEffect(() => {
        setOngData({ welcomeText: ong.welcomeText });
    }, [ong]);

    useEffect(() => {
        if (ongData.welcomeText) setTimeout(() => {
            setIsLoading(false);
            setIsDisabled(false);
        }, 500);
    }, [ongData]);

    const slidesSchema = yup.object().shape({
        welcomeText: yup.string('Tiene que ser un string').min(20, 'Mínimo 20 carácteres.').required('El texto de bienvenida es requerido.')
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setIsLoading(true);

        const organizationPayload = {
            ...ong,
            welcomeText: values.welcomeText
        }

        editOrganization(organizationPayload, 1).then(res => {
            if (res.status === 200) {
                setOngData(initialValues);
                resetForm();
                setSuccessMsg('Modificado exitosamente');
                dispatch(editOngWelcomeText(organizationPayload.welcomeText));
                setTimeout(() => setIsLoading(false), 500);
            } else {
                setError(true);
                setSubmitting(false);
                setTimeout(() => setIsLoading(false), 500);
            }
        });
    }

    return (
        <CenterResponsiveContainer>
            { isLoading ? <Spinner /> :
            <Formik
                validationSchema={slidesSchema}
                initialValues={ongData}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <InputForm 
                            errors={errors.welcomeText}
                            touched={touched.welcomeText}
                            as='textarea' 
                            name='welcomeText' 
                            type='text' 
                            disabled={isDisabled} 
                            placeholder='Texto de bienvenida' 
                        />
                        <SendButton isSubmitting={isSubmitting} text='Cambiar' />
                    </Form>
                )}
            </Formik> }

            {error && <ErrorAlert setError={setError} />}

            {successMsg && (
              <SuccessAlert
                successMsg={successMsg}
                setSuccessMsg={setSuccessMsg}
              />
            )}
        </CenterResponsiveContainer>
    )
}
