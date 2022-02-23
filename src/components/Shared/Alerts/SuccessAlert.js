import React from "react";
import Swal from "sweetalert2";

export default function SuccessAlert(props) {
    const {setSuccessMsg, successMsg} = props
    Swal.fire({
        text: successMsg,
        icon: "success",
        confirmButtonColor: "green",
      }).then(
          setSuccessMsg(false)
      )

    return (
        <></>
    )
}