import React from 'react';
import { Formik, Form, Textarea } from 'formik';
import * as yup from 'yup';
import InputForm from '../../../components/Shared/Forms/InputForm';
import CenterResponsiveContainer from '../../../components/Shared/Containers/CenterResponsiveContainer';
import UploadImageComponent from '../../../components/Shared/Others/UploadImageComponent';

export default function BackofficeSlides() {
    const init = {
        welcomeText: '',

    }

    const slidesSchema = yup.object().shape({
        welcomeText: yup.string('Tiene que ser un string').min(20).required()
    });

    const onSubmit = () => {

    }

    return (
        <CenterResponsiveContainer>
            <Formik
                validationSchema={slidesSchema}
                initialValues={init}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputForm as='textarea' name='welcomeText' type='textarea' disabled={isSubmitting} placehoder='Texto de bienvenida' />
                    </Form>
                )}
            </Formik>
        </CenterResponsiveContainer>
    )
}
