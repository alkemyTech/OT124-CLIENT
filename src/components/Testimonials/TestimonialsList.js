import React from "react";
import { useState, useEffect } from "react";
import {
  deleteTestimonial,
  getAllTestimonials,
} from "../../services/testimonials";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import TableLayout from "../Shared/Table/TableLayout";
import HeaderTable from "../Shared/Table/HeaderTable";
import Pagination from "../Shared/Table/Pagination";
import useQueries from "../../hooks/useQueries";
import SearchBar from "../Shared/Others/SearchBar";

function TestimonialsList() {
  const [isLoad, setIsLoad] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  const queries = useQueries();
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    getAllTestimonials(queries)
      .then((res) => {
        setTestimonials(res?.data?.testimonials);
        setCantItems(res?.data?.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);

  return (
    <>
      <SearchBar />
      {testimonials?.length ? (
        <TableLayout>
          <HeaderTable
            columnsName={["Nombre", "Imagen", "Contenido", "Fecha"]}
          />
          <BodyTable
            isLoad={isLoad}
            setIsLoad={setIsLoad}
            service={deleteTestimonial}
            list={testimonials}
            bodyName={"testimonio"}
            message={"¿Desea eliminar este testimonio?"}
            afterMessage={"Testimonio eliminado con éxito"}
          />
        </TableLayout>
      ) : (
        <NotFoundComponent title={"No se encontraron testimonios"} />
      )}
      <Pagination cantItems={cantItems} />
    </>
  );
}

export default TestimonialsList;
