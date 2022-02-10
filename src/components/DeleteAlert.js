import React from "react";
import Swal from "sweetalert2";
import { deleteCategory } from "../services/categories";

function DeleteAlert(props) {
  const { title, message, afterMessage, id, styles, list, setList } = props;

  const deleteSubmit = async (e) => {
    const id = e.target.getAttribute("id");
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
      const response = await deleteCategory(id);
      if (response.status === 200) {
        setList(list.filter((e) => e.id !== id));
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
