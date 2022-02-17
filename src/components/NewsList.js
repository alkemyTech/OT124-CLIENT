import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {deleteNew, getAllNews} from "../services/news"
import DeleteAlert from "./DeleteAlert";
import { API_BASE_URL } from "../services";

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
      {news.length ? (
        <div className="shadow-md">
          <table className=" shadow-md text-left transform ease-in-out hover:-translate-x-1 duration-200 divide-y divide-gray-200 table-fixed w-full border-collapse cursor-pointer">
            <thead className="bg-gray-100 text-sm sm:text-base">
              <tr className="uppercase">
                <th className="tracking-wider py-3 px-4">Nombre</th>
                <th className="tracking-wider py-3 px-4">Fecha</th>
                <th className="tracking-wider py-3 px-4">Acciones</th>
                <th className="tracking-wider py-3 px-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {news?.map((e, count) => (
                <tr
                  className={`${
                    count % 2 === 0 ? "" : ""
                  } p-10 transform ease-in-out duration-300 md:hover:scale-102 text-sm sm:text-base`}
                  key={e.id}
                >
                  <td className="py-3 px-4">{e.name}</td>
                  <td className="py-3 px-4">
                  {e?.createdAt
                         ? new Date(
                             e?.createdAt
                           ).toLocaleDateString()
                         : null}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <DeleteAlert
                      styles={
                        " bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600"
                      }
                      id={e.id}
                      title={"ELIMINAR"}
                      message={
                        "¿Está seguro que desea eliminar esta categoría?"
                      }
                      afterMessage={
                        "La categoría ha sido eliminada exitosamente"
                      }
                      service={deleteNew}
                      setIsLoad={setIsLoad}
                      isLoad={isLoad}
                    />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Link
                      to={`editar-novedad/${e.id}`}
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
        <div className=" flex flex-col text-center justify-center  mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
                            <h3 className=" p-1 text-xl">No hay novedades existentes</h3>
                    </div> 
      )}
    </>
  );
}

export default NewsList;
