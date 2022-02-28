import React from "react";
import CUMembersForm from "../../../components/Members/CUMembersForm";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";


export default function BackofficeCreateNews() {
  return (
    <CenterResponsiveContainer>
        <CUHeader title={"Crear un miembro"} />
        <CUMembersForm isEdit={false} />
    </CenterResponsiveContainer>
  );
}