import {getNew} from "../services/news";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { API_BASE_URL } from "../services";
import CenterResponsiveContainer from "./Shared/Containers/CenterResponsiveContainer";

export default function NewDetails() {

    const { id } = useParams();
    const [selectedNew, setSelectedNew] = useState();

    console.log(id)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getNew (id);
                console.log(response)
                setSelectedNew(response?.data?.new)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    return (
        <CenterResponsiveContainer>
            {selectedNew !== undefined ?
                    <div className="md:mx-10 mx-5 grid grid-cols-1 md:grid-cols-2 rounded">
                        <h3 className=" text-center font-bold text-4xl mb-6 md:col-start-1 md:col-end-2">{selectedNew.name}</h3>
                        <img className=" md:col-start-1 md:col-end-2 md:max-w-[600px] md:min-w-[350px] rounded justify-self-center self-center " src={selectedNew?.image?.key && `${API_BASE_URL}/api/v1/files/${selectedNew?.image?.key}`}></img>
                        <p className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 font-normal text-lg mt-6 overflow-y-scroll overflow-x-hidden px-6 md:max-h-full min-h-[100px]">{selectedNew.content}</p>
                    </div>
             : 
                <div className="grid rounded grid-cols-[1fr] grid-rows-[1fr] justify-items-center">
                    <h3 className=" text-xl ">La novedad no existe o no se encuentra.</h3>
                </div>
             }
        </CenterResponsiveContainer>
    )
}