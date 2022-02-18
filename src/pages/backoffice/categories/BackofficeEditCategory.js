import React from "react";
import CUCategoriesForm from "../../../components/Categories/CUCategoriesForm";
import CUCategoriesHeader from "../../../components/Categories/CUCategoriesHeader";

export default function BackofficeEditCategory() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 sm:w-2/3">
        <CUCategoriesHeader title={"Modificar una categoria"} />
        <CUCategoriesForm isEdit={true} />
      </div>
    </div>
  );
}