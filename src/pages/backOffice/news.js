import React from "react";
import { Link } from "react-router-dom";
import newsIcon from "../../img/icons/news.png";

export default function BackofficeNews() {


    // map elements on second div. Adjust flow with flex.

    return (
        <section className=" grid justify-items-center grid-cols-1 md:p-12">
            <div className=" md:w-48 w-32 md:h-48 h-32 border-1 rounded-lg p-2 md:p-6 grid justify-items-center gap-2 shadow-sm hover:shadow-lg">
                <img className=" p-1 w-28 " src={newsIcon}></img>
                <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"><Link to={"/backoffice"}>VOLVER</Link></button>
            </div>
            <div className="flex flex-wrap md:p-2">
                <div className=" grid flex-col mx-6 my-6 md:w-60 w-32 md:h-60 h-32 border-1 rounded-lg p-2 md:p-6 shadow-lg hover:shadow-2xl">
                    <h3 className=" text-xl">TITULO LARGOOOOOOO</h3>
                    <p>Aqui hay poco contenido descriptivo, pero que mala suerte, yo queria más</p>
                    <button className="bg-sky-500 w-fit self-center py-1 justify-self-center hover:bg-sky-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"><Link to={"/backoffice"}>MÁS INFORMACION</Link></button>
                </div>
            </div>
        </section>
    )
}