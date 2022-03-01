import React from "react";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";
import CUSlidesForm from "../../../components/Slides/CUSlidesForm";


export default function BackofficeCreateSlides() {
  return (
    <CenterResponsiveContainer>
        <CUHeader title={"Crear un Slide"} />
        <CUSlidesForm isEdit={false} />
    </CenterResponsiveContainer>
  );
}
