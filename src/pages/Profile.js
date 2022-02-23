import React, { useState, useEffect } from "react";
import ProfileForm from "../components/Profile/ProfileForm";
import {profileGetMine} from "../services/Profile"
import { profileDelete } from "../services/Profile";
import DeleteAlert from "../components/Shared/Alerts/DeleteAlert";
import { useNavigate } from "react-router-dom"

export default function Profile() {

    const navigate = useNavigate();
    const [popUp, setPopUp] = useState({visible: false, operation: "null"})
    const [profile, setProfile] = useState(undefined)
    const [isLoad, setIsLoad] = useState(false)

    async function handleDelete() {

      const res = await profileDelete();
  
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
               if (response.data.user === undefined) {
                   setProfile(undefined)
               } else {
                   setProfile(response?.data?.user)
               }
           } catch (e) {
               console.error(e);
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
                <h2 className=" col-start-2 col-end-3 row-start-1 row-end-2 font-bold md:text-3xl text-xl">{profile === undefined ? "Cargando datos..." : profile.lastname + " " + profile.firstname}</h2>
                <h3 className=" col-start-2 col-end-3 row-start-2 row-end-3 md:text-xl text-sm">{profile === undefined ? "Cargando datos..." : profile.email}</h3>
              </div>
              <div className="grid gap-2 grid-cols-2 row-start-3 row-end-4 col-start-1 col-end-3 justify-items-center items-center">
            {popUp.visible ? null :
              <>
                <button onClick={() => setPopUp({visible:true, operation: "Editar datos"})} className=" w-24 h-12 border rounded border-sky-500 font-semibold hover:text-white hover:bg-sky-500 text-sky-500">Editar</button>
                <DeleteAlert 
                  id="1"
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
}