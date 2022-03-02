import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { deleteUserData, setUserData } from "../../features/authSlice";
import {profileGetMine, profileDelete, profileUpdate, awardsGetMe} from "../../services/Profile"
import DeleteAlert from "../Shared/Alerts/DeleteAlert";
import { API_BASE_URL } from '../../services/index';

import ProfileForm from "./ProfileForm";

export default function ProfileBody () {
    const [profile, setProfile] = useState(undefined)
    const [awarded, setAwarded] = useState("")
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
                   async function fetchAwardsData () {
                       try {
                           const awardRes = await awardsGetMe()
                           console.log(awardRes?.data)
                           setAwarded(awardRes?.data?.amounts)
                       } catch (error) {
                           
                       }
                   }
                   fetchAwardsData()
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

    const badges = {
        gold: '9ab88778-2003-4e7f-8f15-fca80f7c5350',
        silver: '83294e9c-5b62-4011-8b0c-d8a6f91b578f',
        bronze: 'bf06bd1e-2637-4a60-bd57-37260948a3b6',
        newbie: '79c191b9-b73f-4ea6-bf36-2241fe3904ce'
    }

    const files = `${API_BASE_URL}/api/v1/files`;

    return (
        <>
        {(profile === undefined | profile === "error") ? <p>No se encuentra la informacion del usuario</p>  : 
            editing ?  
                <ProfileForm id = {profile.id} firstName= {profile.firstName} lastName= {profile.lastName} email={profile.email} editing = {editing} setEditing = {setEditing}/>
            :
                <div className=" h-48 grid grid-cols-2 md:m-0 mx-4">
                    <div className="flex flex-row text-2xl col-start-1 col-end-2">
                        <h3>{profile.firstName} {profile.lastName}</h3>
                    </div>
                    <h4 className=" text-lg text-gray-400 col-start-1 col-end-2">{profile.email}</h4>
                    
                    <div className=" grid col-start-2 col-end-3 row-start-1 row-end-4">
                        {
                            awarded > 5000 ? <img className="justify-self-center self-center sm:w-[170px] w-[90px] sm:ml-0 sm:mb-0 mb-16 ml-4" src={`${files}/${badges.gold}`} alt='gold' />
                            : awarded > 1000 ? <img className="justify-self-center self-center sm:w-[210px] w-[90px] sm:ml-0 sm:mb-0 mb-16 ml-4" src={`${files}/${badges.silver}`} alt='silver' />
                            : awarded > 300 ? <img className="justify-self-center self-center sm:w-[200px] w-[90px] sm:ml-0 sm:mb-0 mb-16 ml-4" src={`${files}/${badges.bronze}`} alt='bronze' />
                            : <img className="justify-self-center self-center  sm:w-[170px]  w-[90px] sm:ml-0 sm:mb-0 mb-16 ml-4" src={`${files}/${badges.newbie}`} alt='newbie' />
                        }
                    </div>
                    <div className=" grid grid-cols-2 gap-5 col-start-1 col-end-3 my-4">
                        <DeleteAlert
                            styles={
                                " bg-red-500 text-white shadow shadow-red-800 rounded-sm px-4 py-1 hover:bg-red-600 transform ease-in-out duration-300 hover:scale-105"
                            }
                            id={profile.id}
                            title={"ELIMINAR"}
                            message={"¿Desea eliminar su cuenta?"}
                            afterMessage={"Cuenta eliminada con éxito"}
                            service={profileDelete}
                            setIsLoad={setIsLoad}
                            isLoad={isLoad}
                        />
                        <button onClick={() => setEditing(true)} className=" bg-sky-500 text-white shadow shadow-sky-800 rounded-sm px-4 py-1  hover:bg-sky-600 transform ease-in-out duration-300 hover:scale-105">Editar</button>
                    </div>
                </div>
        }
    
        </>  
    )
}