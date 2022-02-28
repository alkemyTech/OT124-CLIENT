import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";
import ProfileBody from "../components/Profile/ProfileBody";

export default function Profile() {

   return <CenterResponsiveContainer>
      <ProfileBody/>
   </CenterResponsiveContainer>

<<<<<<< HEAD
    async function handleDelete(id) {

      const res = await profileDelete(id);
  
      if (res.status === 200) {
        localStorage.setItem("userData", "");
        navigate("/");
      } else {
          console.log("Error 500")
      }
    }

     useEffect(() => {
       async function fetchData() {
           try {
               const response = await profileGetMine();
               console.log(response.data)
               if (response?.data === undefined) {
                   setProfile(undefined)
               } else {
                   setProfile(response?.data)
               }
           } catch (e) {
               console.error(e);
               setProfile("error")
           }
       };
       fetchData();
   }, [isLoad]);



  return (
        <div className=" hover:shadow-lg rounded-sm p-2 md:p-10 md:m-28 shadow-md ">
          {popUp.visible ? <div className="grid grid-rows-3 grid-cols-1 justify-item-center col-start-1 col-end-2 row-start-1 row-end-3 m-2">
            <h3 className="font-bold text-3x1 row-start-1 row-end-2 text-center self-center md:mt-2 mt-12">{popUp.operation}</h3>
            {popUp.operation === "Editar datos" ? 
            <>
              <button type="cancel" onClick={() => setPopUp({visible:false, operation: "Null"})} className=" absolute max-w-fit md:max-w-fit h-12 p-1 md:p-1 text-sm  border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500">CANCELAR</button>
              <ProfileForm elements={popUp, setPopUp, profile}></ProfileForm>
            </> : 
            null
            }
              </div> 
            : 
            <div className="grid grid-rows-3 row-start-1 row-end-4">
              <div className="grid gap-1 grid-rows-2 md:grid-cols-[minmax(175px,175px)_minmax(225px,1fr)] grid-cols-[minmax(75px,75px)_minmax(125px,1fr)] m-2 row-start-1 row-end-2 col-start-1 col-end-3 ">
                <h2 className=" col-start-2 col-end-3 row-start-1 row-end-2 font-bold md:text-3xl text-xl">{profile === undefined ? "Cargando datos..." : profile === "error" ? "Su token expiro, vuelva a loguearse." : profile.lastName + " " + profile.firstName}</h2>
                <h3 className=" col-start-2 col-end-3 row-start-2 row-end-3 md:text-xl text-sm">{profile === undefined ? "Cargando datos..." : profile === "error" ? null : profile.email}</h3>
              </div>
              <div className="grid gap-2 grid-cols-2 row-start-3 row-end-4 col-start-1 col-end-3 justify-items-center items-center">
            {popUp.visible ? null :
              
                (profile === undefined || profile === "error") ?  null : 
                <>
                  <button onClick={() => setPopUp({visible:true, operation: "Editar datos"})} className=" w-24 h-12 border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">Editar</button>
                  <DeleteAlert 
                  id={profile.id}
                  styles="w-24 h-12 border rounded border-red-500 font-semibold hover:text-white hover:bg-red-500 text-red-500"
                  isLoad={isLoad}
                  title={"ELIMINAR"}
                  message={
                    "¿Está seguro que desea eliminar su cuenta?"
                  }
                  afterMessage={
                    "Su cuenta ha sido eliminada exitosamente"
                  }
                  setIsLoad={setIsLoad}
                  service={handleDelete}
                  >
                  ELIMINAR
                  </DeleteAlert>
                </>
            }
              </div>
            </div>
            }
      </div>
  );
=======
>>>>>>> c0431484976110d6e3b8b003a0b7cbfd8dc294eb
}