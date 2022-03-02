import React from "react";
import CUNewsForm from "../../../components/News/CUNewsForm";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";


export default function BackofficeCreateNews() {
  return (
    <CenterResponsiveContainer>
        <CUHeader title={"Crear una novedad"} />
        <CUNewsForm isEdit={false} />
    </CenterResponsiveContainer>
  );
}
