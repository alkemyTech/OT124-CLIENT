import React from "react";
import AboutUsHeader from "../../../components/AboutUsHeaders";
import AboutUsList from "../../../components/AboutUsList";

let aboutUs = [
  {
    id: "1",
    name: "Jorge Porcel",
    image: "yo.jpg",
  },
  {
    id: "2",
    name: "Pedro Rodriguez",
    image: "yo.jpg",
  },
  {
    id: "3",
    name: "Rafael Gomez",
    image: "yo.jpg",
  },
];


export default function BackofficeAboutUs() {
  return (
    <div className=" container mx-auto flex justify-center shadow-lg sm:py-40">
      <div className="sm:px-32 px-2 w-full">
        <AboutUsHeader />
        <AboutUsList aboutUs={aboutUs} />
      </div>
    </div>
  );
}