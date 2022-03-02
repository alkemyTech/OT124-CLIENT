import React from "react";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";
import CUTestimonialsForm from "../../../components/Testimonials/CUTestimonialsForm";

export default function BackofficeCreateTestimonials() {
  return (
    <CenterResponsiveContainer>
      <CUHeader title={"Crear un testimonio"} />
      <CUTestimonialsForm isEdit={false} />
    </CenterResponsiveContainer>
  );
}
