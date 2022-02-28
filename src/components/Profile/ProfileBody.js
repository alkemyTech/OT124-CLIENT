import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { deleteUserData, setUserData } from "../../features/authSlice";
import {profileGetMine, profileDelete, profileUpdate} from "../../services/Profile"
import DeleteAlert from "../Shared/Alerts/DeleteAlert";

import ProfileForm from "./ProfileForm";


export default function ProfileBody () {
    const [profile, setProfile] = useState(undefined)
    const [isLoad, setIsLoad] = useState(false)
    const [editing, setEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const amount = 10

    useEffect(() => {
       async function fetchData() {
           try {
               const response = await profileGetMine();
               if (response?.data === undefined) {
                   dispatch(deleteUserData())
                   navigate('/')
               } else {
                   setProfile(response?.data?.user)
               }
           } catch (e) {
               console.error(e);
               setProfile("error")
           }
       };
       fetchData();
   }, [isLoad, dispatch, navigate]);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
      }, []);

    return (
        <>
        {(profile === undefined | profile === "error") ? <p>No se encuntra la informacion del usuario</p>  : 
            editing ?  
                <ProfileForm id = {profile.id} firstName= {profile.firstName} lastName= {profile.lastName} email={profile.email} editing = {editing} setEditing = {setEditing}/>
            :
                <div className=" h-48 grid grid-cols-2 md:m-0 mx-4">
                    <div className="flex flex-row text-2xl col-start-1 col-end-2">
                        <h3>{profile.firstName} {profile.lastName}</h3>
                    </div>
                    <h4 className=" text-lg text-gray-400 col-start-1 col-end-2">{profile.email}</h4>
                    
                    <div className=" grid col-start-2 col-end-3 row-start-1 row-end-4">
                        <div className=" self-center justify-self-center border-2 rounded-full w-16 h-16 md:w-20 md:h-20 bg-slate-500 "></div>
                    </div>
                    <div className=" grid grid-cols-2 gap-5 col-start-1 col-end-3 my-4">
                        <DeleteAlert
                            styles={
                                " bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1  hover:bg-red-600"
                            }
                            id={profile.id}
                            title={"ELIMINAR"}
                            message={"¿Desea eliminar su cuenta?"}
                            afterMessage={"Cuenta eliminada con éxito"}
                            service={profileDelete}
                            setIsLoad={setIsLoad}
                            isLoad={isLoad}
                        />
                        <button onClick={() => setEditing(true)} className=" bg-sky-500 text-white shadow shadow-sky-800 rounded-sm px-4 py-1  hover:bg-sky-600">Editar</button>
                    </div>
                </div>
        }
    
        </>  
    )
}