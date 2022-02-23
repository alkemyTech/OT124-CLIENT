import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { deleteUserData } from "../../../features/authSlice";

export default function ExpiredSessionAlert() {
    const dispach = useDispatch()
    const navigate = useNavigate()
    Swal.fire({
        text: "Sesion Vencida. Por favor vuelva a loguearse",
        icon: "warning",
        confirmButtonColor: "green",
        confirmButtonText: "Aceptar"
      }).then(res=>{
          dispach(deleteUserData())
          navigate('/login')
      }
      )
    return (
        <></>
    )
}