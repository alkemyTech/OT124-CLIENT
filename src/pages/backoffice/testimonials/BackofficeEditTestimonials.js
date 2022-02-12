import React from "react";
import CUTestimonialsForm from "../../../components/CUTestimonialsForm";
import TestimonialsHeader from "../../../components/TestimonialsHeader";

export default function BackofficeEditTestimonials() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <TestimonialsHeader title={"Modificar un testimonio"} />
        <CUTestimonialsForm isEdit={true} />
      </div>
    </div>
  );
}