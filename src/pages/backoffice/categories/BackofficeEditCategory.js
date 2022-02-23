import React from "react";
import CUCategoriesForm from "../../../components/Categories/CUCategoriesForm";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import CUHeader from "../../../components/Shared/Containers/CUHeader";

export default function BackofficeEditCategory() {
  return (
    <CenterResponsiveContainer>
      <CUHeader title={"Modificar una categoria"} />
      <CUCategoriesForm isEdit={true} />
    </CenterResponsiveContainer>
  );
}
