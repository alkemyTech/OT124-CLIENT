import React from "react";
import { useState, useEffect } from "react";
import { getAllNews } from "../services/news";
import TableLayout from "./Shared/Table/TableLayout";
import HeaderTable from "./Shared/Table/HeaderTable";
import BodyTable from "./Shared/Table/BodyTable";
import NotFoundComponent from "./Shared/Others/NotFoundComponent";
import { deleteNew } from "../services/news";
import Pagination from "./Shared/Table/Pagination";
import useQueries from "../hooks/useQueries";
import SearchBar from "./Shared/Others/SearchBar";

function NewsList(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [news, setnews] = useState([]);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    getAllNews(queries)
      .then((res) => {
        setnews(
          res?.data?.news?.map((e) => {
            const { id, name, image, createdAt } = e;
            const date = new Date(createdAt).toLocaleDateString();
            return { ...{ image, name, date, id } };
          })
        );
        setCantItems(res?.data?.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);

  return (
    <>
      <SearchBar />
      {news?.length ? (
        <TableLayout>
          <HeaderTable columnsName={["Imagen", "Nombre", "Fecha"]} />
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
      ) : (
        <NotFoundComponent title={"No se encontraron novedades"} />
      )}
      <Pagination cantItems={cantItems} />
    </>
  );
}

export default NewsList;
