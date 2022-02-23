import {getAllNews} from "../services/news";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../services";

export default function News() {

    const [newsArray, setNewsArray] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllNews();
                setNewsArray(response?.data?.news)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="grid grid-cols-1 grid-rows-[20px, 1fr] w-auto gap-5">
            <div className="justify-self-center">
                <h2 className=" text-3xl p-4">Novedades</h2>
            </div>
            <div className="grid gap-6 md:gap-12 md:grid-cols-2 grid-cols-1 justify-items-center">
            {(newsArray === undefined || newsArray?.length === 0) ?
                <div className="flex col-start-1 col-end-3">
                    No se encontraron novedades
                </div>
               :
                newsArray.map((element) => {
                    return (
                    <>
                    <div className="md:grid hidden rounded max shadow-md grid-cols-1 grid-rows-[1fr,40px] w-3/4 h-60 bg-white">
                         <img className=" w-fit h-fit justify-self-center self-center px-1 border-2 row-start-1 row-end-2 col-start-1 col-end-2" src={element?.image?.key && `${API_BASE_URL}/api/v1/files/${element?.image?.key}`} ></img>
                         <h3 className=" px-1 place-self-center text-xl row-start-2 row-end-3 col-start-1 col-end-2">{element.name}</h3>
                         <div className=" flex row-start-1 row-end-3 col-start-1 col-end-2 bg-slate-400 opacity-0 hover:opacity-100 justify-center items-center">
                            <button className=" hover:bg-sky-600 rounded p-2 opacity-100 tx text-white bg-sky-500 h-fit">
                                 <Link to={"/novedades/" + element.id}>MÁS INFORMACION</Link>
                             </button>
                         </div>
                     </div>
                    </> 
                     )
                })
                } 
            </div>
        </section>
    )
}