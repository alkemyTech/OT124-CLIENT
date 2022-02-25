import React  from "react";
import CategoriesList from "../../../components/Categories/CategoriesList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import HeaderList from "../../../components/Shared/Containers/HeaderList";

export default function BackofficeCategories() {
  return (
    <CenterResponsiveContainer>
      <HeaderList
        title={"Categorias"}
        name={"categoria"}
        addTitle={"Añadir una nueva categoria"}
      />
      <CategoriesList />
    </CenterResponsiveContainer>
  );
}
