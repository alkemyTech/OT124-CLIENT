import React from "react";
import CUTestimonialsForm from "../../../components/Testimonials/CUTestimonialsForm";
import CUTestimonialsHeader from "../../../components/Testimonials/CUTestimonialsHeader";

export default function BackofficeCreateTestimonials() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CUTestimonialsHeader title={"Crear un testimonio"} />
        <CUTestimonialsForm isEdit={false} />
      </div>
    </div>
  );
}