import React from "react";
import { useState, useEffect } from "react";
import { getAllNews} from "../services/news"
import TableLayout from "./Shared/Table/TableLayout";
import HeaderTable from "./Shared/Table/HeaderTable";
import BodyTable from "./Shared/Table/BodyTable";
import NotFoundComponent from "./Shared/Others/NotFoundComponent"
import { deleteNew } from "../services/news";

function NewsList(props) {
  const [ isLoad, setIsLoad ] = useState(false)
  const [news, setnews] = useState([]);

  useEffect(() => {
    getAllNews()
      .then((res) => {
        setnews(res.data.news.map((e)=>{
          const {id, name, image, createdAt} = e
          const date = new Date(createdAt).toLocaleDateString() 
          return { ...{image,name, date, id} }
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad]);


  
  return (
    <>
      {news?.length ? (
        <TableLayout>
          <HeaderTable columnsName={["Imagen", "Nombre","Fecha"]} />
          <BodyTable
            isLoad={isLoad}
            setIsLoad={setIsLoad}
            service={deleteNew}
            list={news}
            bodyName={"novedad"}
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
