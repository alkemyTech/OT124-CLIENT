import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import InputForm from '../../../components/Shared/Forms/InputForm';
import CenterResponsiveContainer from '../../../components/Shared/Containers/CenterResponsiveContainer';
import UploadImageComponent from '../../../components/Shared/Others/UploadImageComponent';
import SendButton from '../../../components/Shared/Buttons/SendButton';
import { editOrganization } from '../../../services/organization';
import { selectOngData } from '../../../features/ongSlice';

export default function BackofficeSlides() {
    const ongData = useSelector(selectOngData);

    const init = {
        welcomeText: ''
    }

    const slidesSchema = yup.object().shape({
        welcomeText: yup.string('Tiene que ser un string').min(20, 'Mínimo 20 carácteres.').required('El texto de bienvenida es requerido.')
    });

    const onSubmit = () => {
        const payload = {
            ...ongData,
            welcomeText: init.welcomeText
        }

        console.log(payload);

        editOrganization(payload, 1);
    }

    return (
        <CenterResponsiveContainer>
            <Formik
                validationSchema={slidesSchema}
                initialValues={init}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <InputForm 
                            errors={errors.welcomeText}
                            touched={touched.welcomeText}
                            as='textarea' 
                            name='welcomeText' 
                            type='textarea' 
                            disabled={isSubmitting} 
                            placeholder='Texto de bienvenida' 
                        />
                        <SendButton isSubmitting={isSubmitting} text='Cambiar' />
                    </Form>
                )}
            </Formik>
        </CenterResponsiveContainer>
    )
}
