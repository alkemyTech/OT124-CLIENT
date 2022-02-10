import {getNew} from "../services/news";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function NewDetails() {

    const { newId } = useParams();
    const [selectedNew, setSelectedNew] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getNew (newId.id);
                setSelectedNew(response.data)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="flex flex-col m-4 p-4 shadow-lg">
            {selectedNew !== undefined ?
                    <div className="grid rounded md:grid-cols-[2fr,1fr,1fr] grid-cols-1 grid-rows-[200px,100px,180px]">
                        <img className=" md:row-start-1 md:row-end-3 "  src={selectedNew.img}></img>
                        <h3 className=" self-center text-xl md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2">{selectedNew.name}</h3>
                        <p className=" overflow-y-scroll overflow-x-hidden md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3">{selectedNew.content}</p>
                    </div>
             : 
                <div className="grid rounded grid-cols-[1fr] grid-rows-[1fr] justify-items-center">
                    <h3 className=" text-xl ">La novedad no existe o no se encuentra.</h3>
                </div>
             }
        </section>
    )
}