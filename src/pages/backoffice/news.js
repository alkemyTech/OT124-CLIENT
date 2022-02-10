import React, { useState } from "react";
import { Link } from "react-router-dom";
import newsIcon from "../../img/icons/news.png";
import Swal from "sweetalert2";
import { deleteNew } from "../../services/news";

export default function BackofficeNews() {
  const [newsArray, setNewsArray] = useState([1, 2]);

  const deleteSubmit = async (e) => {
    Swal.fire({
      title: "ELIMINAR",
      text: "Esta seguro que desea eliminar la novedad?",
      icon: "warning",
      confirmButtonText: "Si",
      showCancelButton: true,
      denyButtonText: "Cancelar",
    }).then(async(respuesta) => {
      if (respuesta.isConfirmed) {
        const res = await deleteNew(e.target.id);
        if (res.status === 200 || 201) {
          Swal.fire({
            text: "La novedad a sido eliminada",
            icon: "success",
            timer: "2000",
          });
        } else {
          Swal.fire({
            text: "La novedad No a podido ser eliminada",
            icon: "error",
            timer: "2000",
          });
        }
      }
    });
  };

  // map elements on second div. Adjust flow with flex.

  // getAllNews()

  // Link "MAS INFORMACION" dara un :id para ver la novedad especificada.

  //setNewsArray(getAllNews)

  return (
    <section className=" grid justify-items-center grid-cols-1 md:p-12">
      <div className=" md:w-48 w-32 md:h-48 h-fit border-1 rounded-lg p-2 md:p-6 grid justify-items-center gap-2 shadow-lg">
        <img className=" p-1 w-28 " src={newsIcon}></img>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-xs md:text-sm py-1 px-2 md:px-4 rounded">
          <Link to={"/backoffice"}>VOLVER</Link>
        </button>
      </div>
      <div className="flex justify-center md:p-2">
        {newsArray.map((element) => {
          return (
            <div className=" grid  h-fit md:grid-cols-[0.5fr_1fr] grid-rows-[0.5fr_1fr_0.5fr] grid-cols-1 flex-col mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
              <img className="md:inline-block col-start-1 col-end-2 row-start-1 row-end-4 bg-slate-500"></img>
              <h3 className=" p-1 text-xl">{element}</h3>
              <p className="p-1">CreatedAT</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-sky-500 w-fit self-center py-1 justify-self-center hover:bg-sky-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded">
                  <Link to={"/backoffice"}>Editar</Link>
                </button>
                <button
                  className="bg-red-500 w-fit self-center py-1 justify-self-center hover:bg-red-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"
                  id={element.id}
                  onClick={(e) => deleteSubmit(e)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
