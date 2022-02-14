import React from "react";
import CUNewsForm from "../../../components/CUNewsForm";
import CUNewsHeader from "../../../components/CUNewsHeader";

export default function BackofficeEditNews() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CUNewsHeader title={"Modificar una novedad"} />
        <CUNewsForm isEdit={true} />
      </div>
    </div>
  );
}
