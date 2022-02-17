import React from "react";
import { Link } from "react-router-dom";

function TestimonialsHeader() {
  return (
    <div className="flex flex-col justify-around">
      <h1 className="sm:text-3xl text-3xl text-center pt-10">Testimonios</h1>
      <div className="justify-start py-10">
        <Link
          to="crear-testimonio"
          className="text-sm bg-green-600 sm:text-lg text-white shadow shadow-green-800 rounded-sm px-8 py-4 hover:bg-green-700 transform ease-in-out duration-300 hover:scale-105"
        >
          Añadir Testimonios
        </Link>
      </div>
    </div>
  );
}

export default TestimonialsHeader;
