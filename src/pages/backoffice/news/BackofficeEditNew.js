import React from "react";
import CUNewsForm from "../../../components/News/CUNewsForm";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";

export default function BackofficeEditNews() {
  return (
    <CenterResponsiveContainer>
      <CUHeader title={"Modificar una novedad"} />
      <CUNewsForm isEdit={true} />
    </CenterResponsiveContainer>
  );
}
