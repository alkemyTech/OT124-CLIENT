import React from "react";
import CUNewsForm from "../../../components/CUNewsForm";
import NewsHeader from "../../../components/NewsHeader";

export default function BackofficeEditNews() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <NewsHeader title={"Modificar una novedad"} />
        <CUNewsForm isEdit={true} />
      </div>
    </div>
  );
}
