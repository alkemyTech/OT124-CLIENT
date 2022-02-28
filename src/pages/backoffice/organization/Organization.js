import React from "react";
import OrganizationsList from "../../../components/Organizations/OrganizationsList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import HeaderList from "../../../components/Shared/Containers/HeaderList";
//when endpoint to get all organizations exists

function Organization() {

  return (
    <CenterResponsiveContainer>
      <HeaderList
        title={"Organizaciones"}
        name={"organizacion"}
        addTitle={"Añadir una nueva organizacion"}
      />
      <OrganizationsList />
    </CenterResponsiveContainer>
  );
}

export default Organization;
