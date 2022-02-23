import React from "react";
import { useState, useEffect } from "react";
import { getAllNews} from "../services/news"
import TableLayout from "./Shared/Table/TableLayout";
import HeaderTable from "./Shared/Table/HeaderTable";
import BodyTable from "./Shared/Table/BodyTable";
import NotFoundComponent from "./Shared/Others/NotFoundComponent"
import { deleteCategory } from "../services/categories";

function NewsList(props) {
  const [ isLoad, setIsLoad ] = useState(false)
  const [news, setnews] = useState([]);

  useEffect(() => {
    getAllNews()
      .then((res) => {
        setnews(res.data.news);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad]);


  
  return (
    <>
      {news?.length ? (
        <TableLayout>
          <HeaderTable columnsName={["ID","Nombre","Fecha"]} />
          <BodyTable
            isLoad={isLoad}
            setIsLoad={setIsLoad}
            service={deleteCategory}
            list={news}
            bodyName={"Novedades"}
            message={"¿Desea eliminar esta novedad?"}
            afterMessage={"Novedad eliminada con éxito"}
          />
        </TableLayout>
      ) : 
      (
        <NotFoundComponent title={"No se encontraron novedades"} />
      )}
    </>
  );
}

export default NewsList;
