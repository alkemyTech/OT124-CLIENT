import React from "react";
import SpinSVGButton from "../Loaders/SpinSVGButton";

function AddButton(props) {
  const { isEdit, isSubmitting } = props;
  return (
    <div className=" text-center my-4">
      <button className={`${!isEdit ? "bg-green-600 hover:bg-green-700 shadow-green-800" : "bg-slate-400 hover:bg-slate-600 shadow-slate-800"} inline-flex text-sm sm:text-base font-bold text-white shadow  rounded-sm px-16 py-2  transform ease-in-out duration-300 hover:scale-105`}  >
        {`${isEdit ? "Modificar": "Crear"}`}
        {isSubmitting && <SpinSVGButton />}
      </button>
    </div>
  );
}

export default AddButton;
