import React from "react";
import { useState, useEffect } from "react";
import { deleteCategory, getAllCategories } from "../../services/categories";
import NotFoundComponent from "../Shared/Others/NotFoundComponent";
import BodyTable from "../Shared/Table/BodyTable";
import TableLayout from "../Shared/Table/TableLayout";
import HeaderTable from "../Shared/Table/HeaderTable";

function CategoriesList(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res?.data?.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoad]);

  return (
    <>
      {categories?.length ? (
          <TableLayout>
            <HeaderTable columnsName={["ID","Nombre", "Descripción"]} />
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
    </>
  );
}

export default CategoriesList;
