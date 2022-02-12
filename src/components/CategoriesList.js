import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCategory } from "../services/categories";
import DeleteAlert from "./DeleteAlert";
function CategoriesList(props) {
  const { categories } = props;
  const { isLoad, setIsLoad } = useState(false)
  return (
    <>
      {categories.length ? (
        <div className="shadow-md">
          <table className=" shadow-md text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
            <thead className="bg-gray-100 text-sm sm:text-base">
              <tr className="uppercase">
                <th className="tracking-wider py-3 px-4">Nombre</th>
                <th className="tracking-wider py-3 px-4">Descripcion</th>
                <th className="tracking-wider py-3 px-4"></th>
                <th className="tracking-wider py-3 px-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories?.map((category, count) => (
                <tr
                  className={`${
                    count % 2 === 0 ? "" : ""
                  } p-10 transform ease-in-out duration-300 hover:scale-105 text-sm sm:text-base`}
                  key={category.id}
                >
                  <td className="py-3 px-4">{category.name}</td>
                  <td className="py-3 px-4">{category.description}</td>
                  <td className="py-3 px-4 text-center">
                    <DeleteAlert
                      styles={
                        " bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600"
                      }
                      id={category.id}
                      title={"ELIMINAR"}
                      message={
                        "¿Está seguro que desea eliminar esta categoría?"
                      }
                      afterMessage={
                        "La categoría ha sido eliminada exitosamente"
                      }
                      service={deleteCategory}
                      setIsLoad={setIsLoad}
                      isLoad={isLoad}
                    />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Link
                      to={`editar-novedad/${category.id}`}
                      className="hover:underline"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center">No hay categorias existentes</h1>
      )}
    </>
  );
}

export default CategoriesList;
