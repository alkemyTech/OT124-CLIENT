import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import "swiper/css/pagination";

import { getAllTestimonials } from '../services/testimonials';
import Spinner from '../components/Shared/Loaders/Spinner';
import NotFoundComponent from '../components/Shared/Others/NotFoundComponent';
import { API_BASE_URL } from '../services/index';
import CenterResponsiveSwiper from '../components/Shared/Containers/CenterResponsiveSwiper';

function Testimonial(props) {
    const { name, image, content } = props;

    return (
        <div className="p-4 text-gray-800 rounded-lg shadow-md px-12 py-10 m-14">
            <div className="mb-2 ">
                <p className="mb-6 text-center text-gray-600 ">{content}</p>
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-2 w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                        <img src={`${API_BASE_URL}/api/v1/files/${image.key}`} alt={'testimonial-' + name} className="object-cover object-center w-full h-full" />
                    </div>
                    <h5 className="font-bold text-[#DB5652]">{name}</h5>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const [ testimonials, setTestimonials ] = useState();
    const [ error, setError ] = useState({
        hasError: false,
        message: ''
    });
    const [ isLoading, setIsLoading ] = useState(true);

    const getTestimonialsOnLoad = async () => {
        const res = await getAllTestimonials();

        if (res.status === 200) {
            setIsLoading(false);
            return setTestimonials(res.data.testimonials);
        }

        setError({ hasError: true, errorMessage: 'No se encontraron testimonios.' });
        setIsLoading(false);
    }

    useEffect(() => {
        getTestimonialsOnLoad();
    }, []);

    return (
        <CenterResponsiveSwiper>
                <div className="md:mb-6 text-center">
                    <h2 className="text-4xl font-bold text-[#DB5652]">Testimonios</h2>
                    <p className="text-lg text-gray-600">Qué dice la gente sobre nosotros</p>
                </div>
                {
                    isLoading ? <Spinner /> 
                    : error.hasError ? <NotFoundComponent title={error.message} />
                    : (
                        <Swiper
                            pagination={{
                                dynamicBullets: true
                            }}
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            className='flex items-center justify-center cursor-move'
                        >
                            {
                                testimonials?.map(testimonial => 
                                    (
                                        <SwiperSlide className='flex items-center justify-center'>
                                            <Testimonial name={testimonial.name} image={testimonial.image} content={testimonial.content} />
                                        </SwiperSlide>
                                    )
                                )
                            }
                        </Swiper>
                    )
                }
        </CenterResponsiveSwiper>
    )
}
