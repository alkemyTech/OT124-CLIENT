import React from "react";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import NotFoundComponent from "../../../components/Shared/Others/NotFoundComponent";
import BodyTable from "../../../components/Shared/Table/BodyTable";
import HeaderTable from "../../../components/Shared/Table/HeaderTable";
import TableLayout from "../../../components/Shared/Table/TableLayout";

function OrganizationsList({ organizations, setOrgData }) {
  return (
    <CenterResponsiveContainer>
      {organizations?.length ? (
        <div className="shadow-md">
          <TableLayout>
            <HeaderTable
              columnsName={[
                "ID",
                "Nombre",
                "Imagen",
                "Direccion",
                "Teléfono",
                "Email",
                "WelcomeText",
              ]}
            />
            <BodyTable
              list={organizations}
              bodyName={"organizacion"}
              message={"¿Desea eliminar esta categoria?"}
              afterMessage={"Categoria eliminada con éxito"}
            />
          </TableLayout>
        </div>
      ) : (
        <NotFoundComponent title={"No se encontraron organizaciones"} />
      )}
    </CenterResponsiveContainer>
  );
}

export default OrganizationsList;
