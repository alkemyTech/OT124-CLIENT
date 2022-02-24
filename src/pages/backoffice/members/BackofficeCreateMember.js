import React from "react";
import CUMembersForm from "../../../components/Members/CUMembersForm";
import CUMembersHeader from "../../../components/Members/CUMembersHeader";


export default function BackofficeCreateNews() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CUMembersHeader title={"Crear un miembro"} />
        <CUMembersForm isEdit={false} />
      </div>
    </div>
  );
}