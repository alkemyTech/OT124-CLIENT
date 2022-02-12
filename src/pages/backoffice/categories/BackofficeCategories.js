import React, { useEffect } from "react";
import { useState } from "react";
import CategoriesHeader from "../../../components/CategoriesHeader";
import CategoriesList from "../../../components/CategoriesList";
import { getAllCategories } from "../../../services/categories";

let initialCategories = [
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
  const [categories, setCategories] = useState(initialCategories);
  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <CategoriesHeader />
        <CategoriesList categories={categories} setCategories={setCategories} />
      </div>
    </div>
  );
}
