import { useParams } from "react-router-dom";
import React from "react";


export default function NewsCollection() {

    const collectNews = [
        {name: "Something One", content: "Bullshit I thought about" , id: 1},
        {name: "Something Two", content: "lorem ipsum calius domo ir deberis dim callus domus elr", id: 2}
    ]

    const newsID = useParams();

    /**
     * 
     * useEffect (() => { 
        const desiredItem = collectNews.filter((e) => e.id == newsID.id)
        setItemArray(desiredItem)
    }, []);
     * 
     */

    const desiredItem = collectNews.filter((e) => e.id == newsID.id)
    
    return (
    <section className=" hover:shadow-lg rounded-sm p-2 md:p-10 md:m-28 shadow-md "> 
        {desiredItem[0] == undefined ? 
            <div className=" grid justify-items-start grid-rows-2 grid-cols-[minmax(75px,75px),minmax(1fr,1fr)]">
                <div class=" flex justify-self-center justify-center items-center row-start-1 row-end-3 -space-x-1 overflow-hidden"> 
                    <img class=" shadow-md inline-block h-16 w-16 md:h-24 md:w-24 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                </div>
            <h2 className=" col-start-2 col-end-3 font-bold text-xl">Algo esta mal</h2>
            <p className="col-start-2 col-end-3">La novedad que estas buscando no existe.</p>
        
        </div>
         : 
        <div className=" grid justify-items-start grid-rows-2 grid-cols-[minmax(75px,75px),minmax(1fr,1fr)]">
            <div class=" flex justify-self-center justify-center items-center row-start-1 row-end-3 -space-x-1 overflow-hidden"> 
                <img class=" shadow-md inline-block h-16 w-16 md:h-24 md:w-24 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </div>
            <h2 className=" self-end p-2 col-start-2 col-end-3 font-bold text-xl">{desiredItem[0].name}</h2>
            <p className=" p-2 col-start-2 col-end-3">This is the content of the new: {desiredItem[0].content}</p>
            
        </div>
        }
    </section>
    )
}