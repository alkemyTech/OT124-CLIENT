import React from "react";
import CUNewsForm from "../../../components/News/CUNewsForm";
import CUNewsHeader from "../../../components/News/CUNewsHeader";


export default function BackofficeCreateNews() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CUNewsHeader title={"Crear una novedad"} />
        <CUNewsForm isEdit={false} />
      </div>
    </div>
  );
}
