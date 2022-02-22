import React from "react";
import Swal from "sweetalert2";

export default function ErrorAlert(props) {
    const {setError} = props
    Swal.fire({
      text: props.message || "Algo salio mal, vuelva a intentarlo nuevamente",
      icon: "error",
      confirmButtonColor: "red",
    }).then(setError(false));

    return (
        <></>
    )
}