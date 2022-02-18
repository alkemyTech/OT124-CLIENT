import React, { useState } from "react";
import ProfileForm from "../components/Profile/ProfileForm";
import { profileDelete } from "../services/Profile";
import { useNavigate } from "react-router-dom"

export default function Profile() {

    const navigate = useNavigate();
    const [popUp, setPopUp] = useState({visible: false, operation: "null"})

    async function handleDelete() {

      const res = await profileDelete();
  
      if (res.status === 200) {
        navigate("/register");
      } else {
          console.log("Error 500")
      }
    }


  return (
        <div className=" hover:shadow-lg rounded-sm p-2 md:p-10 md:m-28 shadow-md ">
          {popUp.visible ? <div className="grid grid-rows-3 grid-cols-1 justify-item-center col-start-1 col-end-2 row-start-1 row-end-3 m-2">
            <h3 className="font-bold text-3x1 row-start-1 row-end-2 text-center self-center md:mt-2 mt-12">{popUp.operation}</h3>
            {popUp.operation === "Editar datos" ? 
            <>
              <button type="cancel" onClick={() => setPopUp({visible:false, operation: "Null"})} className=" absolute max-w-fit md:max-w-fit h-12 p-1 md:p-1 text-sm  border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">CANCELAR</button>
              <ProfileForm elements={popUp, setPopUp}></ProfileForm>
            </> : 
            <>
              <button onClick={() => setPopUp({visible:false, operation: "Null"})} className=" text-sm absolute max-w-fit h-12 border rounded p-2 border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">CANCELAR</button>
              <div className="grid grid-cols-2 w-1/2 justify-self-center row-start-3 row-end-4">
                
                <button onClick={() => handleDelete()} className=" col-start-1 col-end-3 justify-self-center max-w-fit p-2 h-12 border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">CONFIRMAR</button>
              </div>
            </>
            }
              </div> 
            : 
            <div className="grid grid-rows-3 row-start-1 row-end-4">
              <div className="grid gap-1 grid-rows-2 md:grid-cols-[minmax(175px,175px)_minmax(225px,1fr)] grid-cols-[minmax(75px,75px)_minmax(125px,1fr)] m-2 row-start-1 row-end-2 col-start-1 col-end-3 ">
              <div class=" flex justify-center items-center row-start-1 row-end-3 -space-x-1 overflow-hidden"> 
                <img class=" shadow-md inline-block h-16 w-16 md:h-24 md:w-24 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
              </div>
                <h2 className=" col-start-2 col-end-3 row-start-1 row-end-2 font-bold md:text-3xl text-xl">Apellido Nombre </h2>
                <h3 className=" col-start-2 col-end-3 row-start-2 row-end-3 md:text-xl text-sm">myemailisimportant@gmail.com</h3>
              </div>
              <div className="grid gap-2 grid-cols-2 row-start-3 row-end-4 col-start-1 col-end-3 justify-items-center items-center">
            {popUp.visible ? null :
              <>
                <button onClick={() => setPopUp({visible:true, operation: "Editar datos"})} className=" w-24 h-12 border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">EDITAR</button>
                <button onClick={() => setPopUp({visible:true, operation: "¿Eliminar la cuenta?"})} className=" w-24 h-12 border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">ELIMINAR</button>
              </>
            }
              </div>
            </div>
            }
      </div>
  );
}