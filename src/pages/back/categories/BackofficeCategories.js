import React, { useEffect } from "react";
import { useState } from "react";
import CategoriesHeader from "../../../components/CategoriesHeader";
import CategoriesList from "../../../components/CategoriesList";
import { getAllCategories } from "../../../services/categories";

export default function BackofficeCategories() {
  
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CategoriesHeader />
        <CategoriesList />
      </div>
    </div>
  );
}