import React from "react";
import CUCategoriesForm from "../../../components/CUCategoriesForm";

export default function BackofficeCreateCategory() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <h1 className=" text-3xl my-5 text-center text-[#9ac9fb]">
          Crear una nueva categoria
        </h1>
        <CUCategoriesForm isEdit={false} />
      </div>
    </div>
  );
}