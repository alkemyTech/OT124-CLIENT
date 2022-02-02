import React, { useState } from "react";

export default function Profile() {

    const [popUp, setPopUp] = useState({visible: false, operation: "null"})


  return (
      <>
        {popUp ? <div className=" absolute w-1/2 justify-item-center"></div> : null}
        <div className="grid flex-row gap-2 grid-cols-2 columns-md grid-rows-2 m-14">
        <div className="grid flex-row gap-1 grid-rows-2 m-2">
            <h2 className="font-bold text-2xl">Nombre del Usuario - <span className="text-gray-400">(Organizacion)</span> </h2>
            <h3 className="font-bold text-3x1">myemailisimportant@gmail.com</h3>
        </div>
        <div className="grid w-1/2 gap-2 grid-flow-row grid-cols-2 col-start-1 col-end-2 row-start-2 row-end-3 justify-items-center items-center">
            <button onClick={() => setPopUp({visible:true, operation: "Editados"})} className=" w-1/2 h-1/2 border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">EDITAR</button>
            <button onClick={() => setPopUp({visible:true, operation: "Eliminados"})} className=" w-1/2 h-1/2 border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">ELIMINAR</button>
        </div>
        </div>
      </>
  );
}

/**
 * 
 *  Esta es la organizacion 1, tambien conocida como la ONG que te contrato, gilipollas.
 * 
 *  El tema es asi, pancho dijo, que un ticket s sobre organizacion se llama endpoint datos publicos, que la peticion dice /organizacion/1/public - Solo lo vimos una vez pero da a entender que hay más que una. 
 * 
 *  Que cada act tenga una id de organizacion...
 * 
 *  Simplicidad / Diego
 * 
 */