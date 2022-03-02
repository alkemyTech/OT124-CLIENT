import React from "react";
import CUActivitiesForm from "../../../components/Activities/CUActivitiesForm";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";

export default function BackofficeCreateActivity() {
  return (
    <CenterResponsiveContainer>
      <CUHeader title={"Crear una actividad"} />
      <CUActivitiesForm isEdit={false} />
    </CenterResponsiveContainer>
  );
}
