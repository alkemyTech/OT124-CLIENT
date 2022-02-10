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

    console.log(newId)

    return (
        <section>
            {selectedNew !== undefined ?
                <div>
                    Aqui si hay
                </div> 
             : 
                <div>
                    No existe, cabron. No existe la id =  {newId}
                </div>
             }
        </section>
    )


}