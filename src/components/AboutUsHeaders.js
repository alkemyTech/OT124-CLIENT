import React from "react";

function AboutUsHeader() {
  return (
    <div className="flex sm:flex-row flex-col justify-around ">
      <h1 className="sm:text-5xl text-3xl text-center pt-10">Nosotros</h1>
      <div className="py-10 text-center">
        <button className=" bg-green-600 text-sm sm:text-base text-white shadow shadow-green-800 rounded-sm px-8 py-4 hover:bg-green-700 transform ease-in-out duration-300 hover:scale-105">
          Añadir nuevo integrante
        </button>
      </div>
    </div>
  );
}

export default AboutUsHeader;