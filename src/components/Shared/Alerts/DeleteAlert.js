import React from "react";
import Swal from "sweetalert2";

function DeleteAlert(props) {
  const { title, message, afterMessage, id, styles, isLoad, setIsLoad, service } = props;

  const deleteSubmit = async (e) => {
    const id = e.target.getAttribute("id");
    console.log(id)
    const { isConfirmed } = await Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      confirmButtonColor: "red",
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      cancelButtonText: "No, cancelar",
    });
    if (isConfirmed) {
      const response = await service(id);
      console.log(response.status,"res delete alert")
      if (response?.status === 200) {
        setIsLoad(!isLoad)
        await Swal.fire({
          text: afterMessage,
          icon: "success",
          confirmButtonColor: "green",
          timer: "2000",
        });
      } else {
        await Swal.fire({
          text: "Algo salio mal, vuelva a intentarlo nuevamente",
          icon: "error",
          confirmButtonColor: "red",
          timer: "2000",
        });
      }
    }
  };

  return (
    <button className={styles} id={id} onClick={(e, id) => deleteSubmit(e)}>
      Eliminar
    </button>
  );
}

export default DeleteAlert;
