import React from "react";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";
import CUTestimonialsForm from "../../../components/Testimonials/CUTestimonialsForm";

export default function BackofficeEditTestimonials() {
  return (
    <CenterResponsiveContainer>
      <CUHeader title={"Modificar un testimonio"} />
      <CUTestimonialsForm isEdit={true} />
    </CenterResponsiveContainer>
  );
}
