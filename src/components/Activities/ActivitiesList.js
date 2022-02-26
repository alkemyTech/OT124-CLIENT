import React from "react";
import { useState, useEffect } from "react";
import { deleteActivities, getAllActivities } from "../../services/activities";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import TableLayout from "../Shared/Table/TableLayout";
import HeaderTable from "../Shared/Table/HeaderTable";
import Pagination from "../Shared/Table/Pagination";

function CategoriesList(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities()
      .then((res) => {
        setActivities(res?.data?.activities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad]);

  return (
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
      <Pagination list={activities} />
    </>
  );
}

export default CategoriesList;
