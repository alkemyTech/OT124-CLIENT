import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getNew } from "../services/new";


export default function NewsCollection() {

    const newsID = useParams();
    const [ resData, setResData ] = useState(undefined);


    useEffect (() => { 
        async function getNewById() {
            const res = await getNew(newsID)
            setResData(res.data)
        }
    }, []);
    
    return (
    <section className=" hover:shadow-lg rounded-sm p-2 md:p-10 md:m-28 shadow-md "> 
        {resData == undefined ? 
            <div className=" grid justify-items-start grid-rows-3 md:grid-rows-2 md:grid-cols-[minmax(75px,75px),minmax(1fr,1fr)]">
                <div class=" flex justify-self-center justify-center items-center row-start-1 row-end-3 -space-x-1 overflow-hidden"> 
                    <img class=" shadow-md inline-block h-16 w-16 md:h-24 md:w-24 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                </div>
                <h2 className=" p-2 md:col-start-2 md:col-end-3 font-bold text-xl">Algo esta mal</h2>
                <p className=" p-2 md:col-start-2 md:col-end-3">La novedad que estas buscando no existe.</p>
            </div>
         : 
        <div className=" grid justify-items-start grid-rows-2 grid-cols-[minmax(75px,75px),minmax(1fr,1fr)]">
            <div class=" flex justify-self-center justify-center items-center row-start-1 row-end-3 -space-x-1 overflow-hidden"> 
                <img class=" shadow-md inline-block h-16 w-16 md:h-24 md:w-24 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </div>
            <h2 className=" self-end p-2 md:col-start-2 md:col-end-3 font-bold text-xl">{resData.name}</h2>
            <p className=" p-2 md:col-start-2 md:col-end-3">This is the content of the new: {resData.content}</p>
        </div>
        }
    </section>
    )
}