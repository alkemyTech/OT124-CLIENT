import { list } from "postcss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteAlert from "../../components/DeleteAlert";
import newsIcon from "../../img/icons/news.png";
import { API_BASE_URL } from "../../services";
import {deleteNew, getAllNews} from "../../services/news"

export default function BackofficeNews() {

    const [newsArray, setNewsArray] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllNews();
                if (response.data.news === undefined) {
                    setNewsArray([])
                } else {
                    setNewsArray(response?.data?.news)
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [isLoad]);

    console.log(newsArray)
    return (
        <section className=" grid justify-items-center grid-cols-1 md:p-12">
            
            <div className=" md:w-48 w-32 md:h-48 h-fit border-1 rounded-lg p-2 md:p-6 grid grid-cols-[fit-10px] grid-rows-2 justify-items-center gap-2 shadow-lg">
                <img className=" col-start-1 col-end-2 row-start-1 row-end-2 p-1 w-28 " alt='' src={newsIcon}></img>
                <button className="col-start-1 col-end-2 row-start-2 row-end-3 h-fit self-center bg-sky-500 hover:bg-sky-700 text-white font-bold text-xs md:text-sm py-1 px-2 md:px-4 rounded"><Link to={"/backoffice"}>VOLVER</Link></button>
                <button className=" col-start-2 col-end-3 row-start-1 row-end-2 cursor-pointer grid justify-items-center hover:bg-green-700 bg-green-500 top-1 right-1 md:mr-2 rounded-full shadow-lg hover:shadow-2xl w-9 md:w-12 h-fit p-1 text-white text-xl md:text-4xl">
                <Link to={"crear-novedad"}>+</Link>
                </button>
            </div>
            <div className="grid grid-cols-[250px] md:grid-cols-[600px] justify-items-center md:p-2">
                {newsArray.length !== 0 ?
                    newsArray?.map((element) => {
                        return(
                            <div className=" grid h-fit md:grid-cols-[250px_250px] md:grid-rows-[0.5fr_1fr_0.5fr] grid-rows-[125px_55px_40px_40px] grid-cols-[200px] mx-2 my-4 md:mx-0 md:my-6  md:h-60 border-1 rounded-lg p-2 md:p-3 shadow-lg hover:shadow-2xl">
                                <img src={`${API_BASE_URL}/api/v1/files/${element.key}`} alt='' className="inline-block md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4 bg-slate-500"></img>
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
                            </div>
                            )
                } )
                 :
                 <>
                    <div className="  flex flex-col text-center justify-center  mx-6 my-6  md:h-60 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
                            <h3 className=" p-1 text-xl">No hay novedades para editar</h3>
                    </div>
                 </>
                 }
                
            </div>
        </section>
    )
}