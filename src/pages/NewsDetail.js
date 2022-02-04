import React from "react";


export default function NewsCollection({desiredItem,newsID}) {

    console.log(desiredItem)

    
    return (
    <section> 
        {desiredItem == undefined ? "These i nothing to see" : "There is something other than null"}
    </section>
    )
}