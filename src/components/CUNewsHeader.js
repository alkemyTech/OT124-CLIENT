import React from "react";
import { Link } from "react-router-dom";

function CUNewsHeader(props) {
  const { title } = props;
  return (
    <div className="flex sm:flex-row flex-col px-24">
      <div className=" flex flex-wrap items-center justify-center">
        <Link
          className="bg-sky-500 hover:bg-transparent hover:text-sky-500 hover:border-sky-500 hover:border text-white font-bold py-3 px-6 rounded transform hover:scale-110 ease-in duration-300"
          to="/backoffice/novedades"
        >
          <span className="pr-2">⬅</span>
          Volver
        </Link>
      </div>
      <div className="text-center w-full">
        <h1 className=" text-3xl my-5 text-center text-[#9ac9fb]">{title}</h1>
      </div>
    </div>
  );
}

export default CUNewsHeader;
