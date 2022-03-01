import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function SuccessAlert(props) {
    let navigate = useNavigate()
    const { setSuccessMsg, successMsg, redirect } = props
    Swal.fire({
        text: successMsg,
        icon: "success",
        confirmButtonColor: "green",
    }).then(
        window.location.reload()
    ).then(
        setSuccessMsg(false)  
       
    )

    return (
        <></>
    )
}