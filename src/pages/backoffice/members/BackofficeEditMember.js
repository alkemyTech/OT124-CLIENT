import React from "react";
import CUMembersForm from "../../../components/Members/CUMembersForm";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";



export default function BackofficeEditNews() {
  return (
    <CenterResponsiveContainer>
        <CUHeader title={"Modificar un miembro"} />
        <CUMembersForm isEdit={true} />
        </CenterResponsiveContainer>
  );
}