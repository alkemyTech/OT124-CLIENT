import React from "react";
import { Link } from "react-router-dom";

const BackArrow = "<"

function NewsHeader() {
  return (
    <div className=" flex sm:flex-row flex-col  items-center justify-around my-7">
      <h1 className="sm:text-5xl text-3xl text-center text-sky-500">
        Novedades
      </h1>
      <div className="py-10 text-center">
        <Link
          to={`crear-novedad`}
          className=" bg-green-600 text-sm sm:text-base text-white shadow shadow-green-800 rounded-sm px-8 py-4 hover:bg-green-700 transform ease-in-out duration-300 hover:scale-105"
        >
          Añadir nueva novedad
        </Link>
      </div>
    </div>
  );
}

export default NewsHeader;
