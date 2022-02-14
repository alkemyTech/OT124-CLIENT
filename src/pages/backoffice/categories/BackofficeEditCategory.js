import React from "react";
import CUCategoriesForm from "../../../components/CUCategoriesForm";
import CUCategoriesHeader from "../../../components/CUCategoriesHeader";

export default function BackofficeEditCategory() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CUCategoriesHeader title={"Modificar una categoria"} />
        <CUCategoriesForm isEdit={true} />
      </div>
    </div>
  );
}