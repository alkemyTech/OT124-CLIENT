import React, { useEffect } from "react";
import { useState } from "react";
import CategoriesHeader from "../../../components/Categories/CategoriesHeader";
import CategoriesList from "../../../components/Categories/CategoriesList";
import CenterResponsiveContainer from "../../../components/Shared/Containers/CenterResponsiveContainer";
import { getAllCategories } from "../../../services/categories";

export default function BackofficeCategories() {
  return (
    <CenterResponsiveContainer>
      <CategoriesHeader />
      <CategoriesList />
    </CenterResponsiveContainer>
  );
}
