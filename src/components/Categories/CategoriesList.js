import React from "react";
import { useState, useEffect } from "react";
import { deleteCategory, getAllCategories } from "../../services/categories";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import TableLayout from "../Shared/Table/TableLayout";
import HeaderTable from "../Shared/Table/HeaderTable";
import Pagination from "../Shared/Table/Pagination";
import useQueries from "../../hooks/useQueries";

function CategoriesList(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [categories, setCategories] = useState([]);

  const queries = useQueries()
  const [cantItems, setCantItems] = useState(0);

  useEffect(() => {
    getAllCategories(queries)
      .then((res) => {
        setCategories(res?.data?.categories);
        setCantItems(res?.data?.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad, queries]);

  return (
    <>
      {categories?.length ? (
        <TableLayout>
          <HeaderTable columnsName={["Nombre", "Descripción", "Fecha"]} />
          <BodyTable
            isLoad={isLoad}
            setIsLoad={setIsLoad}
            service={deleteCategory}
            list={categories}
            bodyName={"categoria"}
            message={"¿Desea eliminar esta categoria?"}
            afterMessage={"Categoria eliminada con éxito"}
          />
        </TableLayout>
      ) : (
        <NotFoundComponent title={"No se encontraron categorias"} />
      )}
      <Pagination cantItems={cantItems} />
    </>
  );
}

export default CategoriesList;
