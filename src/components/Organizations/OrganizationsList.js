import React from "react";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import HeaderTable from "../Shared/Table/HeaderTable";
import TableLayout from "../Shared/Table/TableLayout";
import { deleteOrganization } from "../../services/organization";
import { getAllOrganizations } from "../../services/organization";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../Shared/Table/Pagination";
import useQueries from "../../hooks/useQueries";
import SearchBar from "../Shared/Others/SearchBar";
import Spinner from "../Shared/Loaders/Spinner";

function OrganizationsList() {
  const [organizations, setOrganizations] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getAllOrganizations(queries)
      .then((res) => {
        setOrganizations(res?.data?.organizations);
        setCantItems(res?.data?.count);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);

  return (
    <>
      <SearchBar />

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {organizations?.length ? (
            <TableLayout>
              <HeaderTable
                columnsName={[
                  "Nombre",
                  "Imagen",
                  "Direccion",
                  "Teléfono",
                  "Email",
                  "Lema",
                  "Fecha",
                ]}
              />
              <BodyTable
                list={organizations}
                bodyName={"organizacion"}
                message={"¿Desea eliminar esta organización?"}
                afterMessage={"organización eliminada con éxito"}
                isLoad={isLoad}
                setIsLoad={setIsLoad}
                service={deleteOrganization}
              />
            </TableLayout>
          ) : (
            <NotFoundComponent title={"No se encontraron organizaciones"} />
          )}
          <Pagination cantItems={cantItems} />
        </>
      )}
    </>
  );
}

export default OrganizationsList;
