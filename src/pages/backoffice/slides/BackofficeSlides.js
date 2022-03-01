import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import CenterResponsiveContainer from '../../../components/Shared/Containers/CenterResponsiveContainer';
import AddButton from '../../../components/Shared/Buttons/Addbutton';
import ErrorAlert from "../../../components/Shared/Alerts/ErrorAlert";
import SuccessAlert from "../../../components/Shared/Alerts/SuccessAlert";
import Spinner from "../../../components/Shared/Loaders/Spinner";
import UploadImageComponent from '../../../components/Shared/Others/UploadImageComponent';
import { getAllSlides, updateSlide } from '../../../services/slides';
import InputForm from '../../../components/Shared/Forms/InputForm';
import TwoColsForm from '../../../components/Shared/Containers/TwoColsForm';

export default function BackofficeSlides() {
    const initialValues = {
        firstSlide: '',
        secondSlide: '',
        thirdSlide: '',
        firstSlideText: '',
        secondSlideText: '',
        thirdSlideText: ''
    };

    const [ slides, setSlides ] = useState(initialValues);

    const [ error, setError ] = useState(false);
    const [ successMsg, setSuccessMsg ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isDisabled, setIsDisabled ] = useState(true);

    const slidesSchema = yup.object().shape({
        firstSlide: yup.mixed().required("El archivo es requerido"),
        secondSlide: yup.mixed().required("El archivo es requerido"),
        thirdSlide: yup.mixed().required("El archivo es requerido"),
        firstSlideText: yup.string('Tiene que ser texto el slide').required('El texto del slide es requerido'),
        secondSlideText: yup.string('Tiene que ser texto el slide').required('El texto del slide es requerido'),
        thirdSlideText: yup.string('Tiene que ser texto el slide').required('El texto del slide es requerido'),
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setIsLoading(true);
        setIsDisabled(true);

        const payload = { 
            image: values.firstSlide, 
            text: values.firstSlideText 
        };

        updateSlide(payload, 1).then(res => {
            if (res.status === 200) {
                setSlides(initialValues);
                resetForm();
                setSuccessMsg('Modificado exitosamente');
                setTimeout(() => {
                    setIsLoading(false);
                    setIsDisabled(false);
                }, 500);
            } else {
                setError(true);
                setSubmitting(false);
                setTimeout(() => {
                    setIsLoading(false);
                    setIsDisabled(false);
                }, 500);
            }
        });
    }

    useEffect(() => {
        getAllSlides()
            .then(res => {
                if (res.status === 200) {
                    const payload = {
                        firstSlide: res.data.slides[0].image,
                        secondSlide: res.data.slides[1].image,
                        thirdSlide: res.data.slides[2].image,
                        firstSlideText: res.data.slides[0].text,
                        secondSlideText: res.data.slides[1].text,
                        thirdSlideText: res.data.slides[2].text
                    }
                    setSlides(payload);
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                    setIsDisabled(false);
                }, 500);
            });
    }, []);

    return (
        <CenterResponsiveContainer>
            { isLoading ? <Spinner /> :
            <Formik
                validationSchema={slidesSchema}
                initialValues={slides}
                onSubmit={onSubmit}
                enableReinitialize={true}
            >
                {({                 
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    setFieldValue,
                    setFieldError, 
                }) => (
                    <Form> 
                        <div className='flex gap-20 md:flex-row flex-col'>
                            <div className='flex flex-col drop-shadow-md'>
                                <UploadImageComponent 
                                    setFieldValue={setFieldValue}
                                    setFieldError={setFieldError}
                                    file={values?.firstSlide}
                                    disabled={isDisabled}
                                    error={errors.firstSlide}
                                    touched={touched.firstSlide}
                                />
                                <InputForm 
                                    errors={errors.firstSlideText}
                                    touched={touched.firstSlideText}
                                    as='textarea'
                                    name='firstSlideText'
                                    type='text'
                                    disabled={isDisabled}
                                    placeholder='Texto del primer slide'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <UploadImageComponent 
                                    setFieldValue={setFieldValue}
                                    setFieldError={setFieldError}
                                    file={values?.secondSlide}
                                    disabled={isDisabled}
                                    error={errors.secondSlide}
                                    touched={touched.secondSlide}
                                />
                                <InputForm 
                                    errors={errors.secondSlideText}
                                    touched={touched.secondSlideText}
                                    as='textarea' 
                                    name='secondSlideText' 
                                    type='text' 
                                    disabled={isDisabled} 
                                    placeholder='Texto del segundo slide' 
                                />
                            </div>

                            <div className='flex flex-col'>
                                <UploadImageComponent 
                                    setFieldValue={setFieldValue}
                                    setFieldError={setFieldError}
                                    file={values?.thirdSlide}
                                    disabled={isDisabled}
                                    error={errors.thirdSlide}
                                    touched={touched.thirdSlide}
                                />
                                <InputForm 
                                    errors={errors.thirdSlideText}
                                    touched={touched.thirdSlideText}
                                    as='textarea' 
                                    name='thirdSlideText' 
                                    type='text' 
                                    disabled={isDisabled} 
                                    placeholder='Texto del tercer slide' 
                                />
                            </div>
                        </div>
                        <AddButton isEdit={true} isSubmitting={isSubmitting} />
                        
                        {error && <ErrorAlert setError={setError} />}

                        {successMsg && (
                          <SuccessAlert
                            successMsg={successMsg}
                            setSuccessMsg={setSuccessMsg}
                          />
                        )}
                    </Form>
                )}
            </Formik> }
        </CenterResponsiveContainer>
    )
}
