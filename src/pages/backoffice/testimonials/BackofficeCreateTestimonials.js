import React from "react";
import CUTestimonialsForm from "../../../components/CUTestimonialsForm";
import TestimonialsHeader from "../../../components/TestimonialsHeader";

export default function BackofficeCreateTestimonials() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
      <TestimonialsHeader title={"Crear un testimonio"} />
        <CUTestimonialsForm isEdit={false} />
      </div>
    </div>
  );
}