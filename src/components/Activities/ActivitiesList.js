import React from "react";
import { useState, useEffect } from "react";
import { deleteActivities, getAllActivities } from "../../services/activities";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import TableLayout from "../Shared/Table/TableLayout";
import HeaderTable from "../Shared/Table/HeaderTable";
import Pagination from "../Shared/Table/Pagination";
import useQueries from "../../hooks/useQueries";
import SearchBar from "../Shared/Others/SearchBar";
import Spinner from "../Shared/Loaders/Spinner";

function ActivitiesList(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getAllActivities(queries)
      .then((res) => {
        setActivities(res?.data?.activities);
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
          {activities?.length ? (
            <TableLayout>
              <HeaderTable
                columnsName={["Nombre", "Imagen", "Descripción", "Fecha"]}
              />
              <BodyTable
                isLoad={isLoad}
                setIsLoad={setIsLoad}
                service={deleteActivities}
                list={activities}
                bodyName={"actividad"}
                message={"¿Desea eliminar esta actividad?"}
                afterMessage={"Actividad eliminada con éxito"}
              />
            </TableLayout>
          ) : (
            <NotFoundComponent title={"No se encontraron actividades"} />
          )}
          <Pagination cantItems={cantItems} />
        </>
      )}
    </>
  );
}

export default ActivitiesList;
