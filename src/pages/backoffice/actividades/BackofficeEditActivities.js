import React from "react";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";
import CUActivitiesForm from "../../../components/Activities/CUActivitiesForm";

export default function BackofficeEditActivities() {
  return (
    <CenterResponsiveContainer>
      <CUHeader title={"Modificar actividad"} />
      <CUActivitiesForm isEdit={true} />
    </CenterResponsiveContainer>
  );
}
