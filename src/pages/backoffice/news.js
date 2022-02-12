<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import { list } from "postcss";
import React, { useState, useEffect } from "react";
>>>>>>> 9310adac9b20078b5f2a884a58e6b61925c5f52a
import { Link } from "react-router-dom";
import DeleteAlert from "../../components/DeleteAlert";
import newsIcon from "../../img/icons/news.png";
import { API_BASE_URL } from "../../services";
import {deleteNew, getAllNews} from "../../services/news"

export default function BackofficeNews() {

    const [newsArray, setNewsArray] = useState([])
    const [isLoad, setIsLoad] = useState(false)

<<<<<<< HEAD
    const [newsArray, setNewsArray] = useState()

=======
>>>>>>> 9310adac9b20078b5f2a884a58e6b61925c5f52a
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllNews();
<<<<<<< HEAD
                setNewsArray(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    // map elements on second div. Adjust flow with flex.

    // getAllNews()

    // Link "MAS INFORMACION" dara un :id para ver la novedad especificada.

    //setNewsArray(getAllNews)

=======
                console.log(response)
                setNewsArray(response?.data?.news)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [isLoad]);
>>>>>>> 9310adac9b20078b5f2a884a58e6b61925c5f52a
    return (
        <section className=" grid justify-items-center grid-cols-1 md:p-12">
            <div className=" md:w-48 w-32 md:h-48 h-fit border-1 rounded-lg p-2 md:p-6 grid justify-items-center gap-2 shadow-lg">
                <img className=" p-1 w-28 " alt='' src={newsIcon}></img>
                <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-xs md:text-sm py-1 px-2 md:px-4 rounded"><Link to={"/backoffice"}>VOLVER</Link></button>
            </div>
<<<<<<< HEAD
            <div className="flex flex-row justify-center md:p-2">
                {newsArray !== undefined ? 
                newsArray.map((element) => {
                    return(
                        <div className=" grid  h-fit md:grid-cols-[0.5fr_1fr] grid-rows-[0.5fr_1fr_0.5fr] grid-cols-1 flex-col mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
                            <img className="md:inline-block col-start-1 col-end-2 row-start-1 row-end-4 bg-slate-500"></img>
                            <h3 className=" p-1 text-xl">{element}</h3>
                            <p className="p-1">CreatedAT</p>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-sky-500 w-fit self-center py-1 justify-self-center hover:bg-sky-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"><Link to={"/backoffice"}>Editar</Link></button>
                                <button className="bg-red-500 w-fit self-center py-1 justify-self-center hover:bg-red-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"><Link to={"/backoffice"}>Eliminar</Link></button>
                            </div>
                        
                        </div>

                    )
                })
                : 
                <>
                    <div className=" grid  h-fit md:grid-cols-[0.5fr_1fr] grid-rows-[0.5fr_1fr_0.5fr] grid-cols-1 flex-col mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
                            <h3 className=" p-1 text-xl">No se encontraron novedades</h3>
                    </div>
                </> }
                
=======
            <div className="flex flex-wrap md:flex-row justify-center md:p-2">
                {newsArray !== undefined ?
                    newsArray?.map((element) => {
                        return(
                            <div className=" grid w-1/2  h-fit md:grid-cols-[0.5fr_1fr] grid-rows-[0.5fr_1fr_0.5fr] grid-cols-1 flex-col mx-2
                            my-4 md:mx-6 md:my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
                                <img src={`${API_BASE_URL}/api/v1/files/${element.key}`} alt='' className="md:inline-block col-start-1 col-end-2 row-start-1 row-end-4 bg-slate-500"></img>
                                <h3 className=" p-1 text-xl">{element.name}</h3>
                                <p className="p-1">{element?.createdAt ? new Date(element?.createdAt).toLocaleDateString() : null}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="bg-sky-500 w-fit self-center py-1 justify-self-center hover:bg-sky-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"><Link to={`editar-novedad/${element.id}`}>Editar</Link></button>
                                    <DeleteAlert 
                                    id={element.id}
                                    styles="bg-red-500 w-fit self-center py-1 justify-self-center hover:bg-red-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"
                                    isLoad={isLoad}
                                    title={"ELIMINAR"}
                                    message={
                                      "¿Está seguro que desea eliminar esta novedad?"
                                    }
                                    afterMessage={
                                      "La novedad ha sido eliminada exitosamente"
                                    }
                                    setIsLoad={setIsLoad}
                                    service={deleteNew}
                                    >
                                    Eliminar
                                    </DeleteAlert>
                                </div>
                            </div>)
                } )
                 :
                    <div className=" flex flex-col text-center justify-center  mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
                            <h3 className=" p-1 text-xl">No hay novedades para editar</h3>
                    </div> 
                 }
>>>>>>> 9310adac9b20078b5f2a884a58e6b61925c5f52a
                
            </div>
        </section>
    )
}