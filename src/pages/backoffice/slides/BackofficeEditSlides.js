import React from "react";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";
import CUSlidesForm from "../../../components/Slides/CUSlidesForm";


export default function BackofficeEditSlides() {
  return (
    <CenterResponsiveContainer>
        <CUHeader title={"Modificar un Slide"} />
        <CUSlidesForm isEdit={true} />
    </CenterResponsiveContainer>
  );
}
