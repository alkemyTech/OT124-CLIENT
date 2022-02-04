import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsDetail from "../pages/NewsDetail";
import React from "react";


export default function NewsCollection() {

    const collectNews = [
        {name: "Something One", content: "Bullshit I thought about" , id: 1},
        {name: "Something Two", content: "Bullshit I thought about", id: 2}
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
    console.log(desiredItem)
    
    return (
    <section className=""> 
        {desiredItem == undefined ? 
        "These i nothing to see" : 
        <>
            <h2>Hello, this is what we found: {desiredItem[0].name}</h2>
            <p>We have more information here: {desiredItem[0].content}</p>
        </>
        }
    </section>
    )
}