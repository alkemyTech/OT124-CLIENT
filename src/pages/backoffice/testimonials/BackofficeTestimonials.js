import React from "react";
import TestimonialsList from "../../../components/Testimonials/TestimonialsList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import HeaderList from "../../../components/Shared/Containers/HeaderList";

export default function BackOfficeTestimonials() {
  return (
    <CenterResponsiveContainer>
      <HeaderList
        title={"Testimonios"}
        name={"testimonio"}
        addTitle={"Añadir un nuevo testimonio"}
      />
      <TestimonialsList />
    </CenterResponsiveContainer>
  );
}
