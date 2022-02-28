import React from "react";
import ActivitiesList from "../../../components/Activities/ActivitiesList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import HeaderList from "../../../components/Shared/Containers/HeaderList";

export default function BackOfficeActivities() {
  return (
    <CenterResponsiveContainer>
      <HeaderList
        title={"Actividades"}
        name={"actividad"}
        addTitle={"Añadir una nueva actividad"}
      />
      <ActivitiesList />
    </CenterResponsiveContainer>
  );
}
