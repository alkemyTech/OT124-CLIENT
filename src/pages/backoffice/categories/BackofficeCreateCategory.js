import React from "react";
import CUCategoriesForm from "../../../components/Categories/CUCategoriesForm";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";

export default function BackofficeCreateCategory() {
  return (
    <CenterResponsiveContainer>
      <CUHeader title={"Crear una categoria"} />
      <CUCategoriesForm isEdit={false} />
    </CenterResponsiveContainer>
  );
}
