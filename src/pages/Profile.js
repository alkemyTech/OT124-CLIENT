import React, { useState } from "react";

export default function Profile() {

    const [popUp, setPopUp] = useState({visible: false, operation: "null"})


  return (
        <div className="grid bg-slate-100 flex-row gap-2 columns-md grid-rows-[minmax(50px,100px)_minmax(50px,100px)_minmax(50px,100px)] p-14 grid-cols-[minmax(400px,1fr)_minmax(400px,_500px)]">
          {popUp.visible ? <div className="grid grid-rows-3 grid-cols-1 justify-item-center col-start-2 col-end-3 row-start-1 row-end-4 m-2">
            <h3 className="font-bold text-3x1 row-start-1 row-end-2 text-center self-center">{popUp.operation}</h3>
            {popUp.operation === "Editadar datos" ? 
            <form className=" grid gap-2 p-1 flex-col row-start-2 row-end-3 grid-cols-2">
              <label >Nombre</label>
              <input placeholder="First name" className="text-black p-1"></input>
              <label>Apellido</label>
              <input placeholder="Last name" className="text-black p-1"></input>
              <label>Email</label>
              <input placeholder="example@email.com" className="text-black p-1"></input>
            </form> 
            : null}
            <div className="grid gap-2 grid-flow-row grid-cols-2 col-start-1 col-end-2 row-start-3 row-end-4 justify-items-center items-center">
              <button onClick={() => setPopUp({visible:false, operation: "Null"})} className=" w-26 h-12 p-2 border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">CONFIRMAR</button>
              <button onClick={() => setPopUp({visible:false, operation: "Null"})} className=" w-26 h-12 p-2  border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">CANCELAR</button>
            </div>
              </div> 
            : null}
        <div className="grid flex-row gap-1 grid-rows-2 m-2 col-start-1 col-end-2 row-start-1 row-end-2 ">
            <h2 className="font-bold text-2xl">Apellido Nombre - <span className="text-gray-400">(Organizacion)</span> </h2>
            <h3 className="font-bold text-3x1">myemailisimportant@gmail.com</h3>
        </div>
        <div className="grid w-1/2 gap-2 grid-flow-row grid-cols-2 col-start-1 col-end-2 row-start-2 row-end-3 justify-items-center items-center">
            {popUp.visible ? null :
              <>
                <button onClick={() => setPopUp({visible:true, operation: "Editadar datos"})} className=" w-24 h-12 border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">EDITAR</button>
                <button onClick={() => setPopUp({visible:true, operation: "¿Eliminar la cuenta?"})} className=" w-24 h-12 border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">ELIMINAR</button>
              </>
            }
            
        </div>
        </div>
  );
}