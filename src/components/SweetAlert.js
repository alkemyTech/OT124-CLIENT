import React from "react";
import Swal from "sweetalert2";

function SweetAlert(props) {
  const showAlert = () => {
    Swal.fire({
      title: props.title,
      text: props.text,
      icon: "warning",
      confirmButtonText: "Si",
      showCancelButton: true,
      denyButtonText: "Cancelar",
    }).then((respuesta) => {
      if (respuesta.isConfirmed) {
        Swal.fire({
          text: props.textDelete,
          icon: "success",
          timer: "2000",
        });
      } else{
        Swal.fire("No se guardaron los cambios", "", "info");
      }
    });
  };

  return (
    <div>
      <br />
      <button onClick={() => showAlert()}>Mostar alerta</button>
    </div>
  );
}

export default SweetAlert;
