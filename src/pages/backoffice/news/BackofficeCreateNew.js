import React from "react";
import CUNewsForm from "../../../components/CUNewsForm";

export default function BackofficeCreateNews() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <h1 className=" text-3xl my-5 text-center text-[#9ac9fb]">
          Crear una nueva novedad
        </h1>
        <CUNewsForm isEdit={false} />
      </div>
    </div>
  );
}
