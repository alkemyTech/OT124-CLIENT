import React from "react";
import CategoriesHeader from "../../../components/CategoriesHeader";
import CategoriesList from "../../../components/CategoriesList";

let categories = [
  {
    id: "1",
    name: "Categ 1",
    description: "lorem",
  },
  {
    id: "2",
    name: "Categ 2",
    description: "lorem",
  },
  {
    id: "3",
    name: "Categ 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam doloremque dicta, deserunt voluptate aliquid quod saepe sunt quasi minus ipsum odio. Earum, modi animi. Molestias quas vel veritatis impedit?",
  },
];


export default function BackofficeCategories() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CategoriesHeader />
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
}
