import React from "react";
import { useState, useEffect } from "react";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import TableLayout from "../Shared/Table/TableLayout";
import HeaderTable from "../Shared/Table/HeaderTable";
import Pagination from "../Shared/Table/Pagination";
import useQueries from "../../hooks/useQueries";
import SearchBar from "../Shared/Others/SearchBar";
import Spinner from "../Shared/Loaders/Spinner";
import { deleteSlide, getAllSlides } from "../../services/slides";

function SlidesList() {
  const [isLoad, setIsLoad] = useState(false);
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getAllSlides(queries)
      .then((res) => {
        setSlides(res?.data?.slides);
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
          {slides?.length ? (
            <TableLayout>
              <HeaderTable
                columnsName={["Imagen", "Texto", "Orden", "Fecha"]}
              />
              <BodyTable
                isLoad={isLoad}
                setIsLoad={setIsLoad}
                service={deleteSlide}
                list={slides}
                bodyName={"slide"}
                message={"¿Desea eliminar este Slide?"}
                afterMessage={"Slide eliminado con éxito"}
              />
            </TableLayout>
          ) : (
            <NotFoundComponent title={"No se encontraron slides"} />
          )}
          <Pagination cantItems={cantItems} />
        </>
      )}
    </>
  );
}

export default SlidesList;
