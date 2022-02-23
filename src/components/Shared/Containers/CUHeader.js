import React from "react";
import { useNavigate } from "react-router-dom";

function CUHeader(props) {
  const { title } = props;
  const navigate = useNavigate();
  return (
    <div className="flex sm:flex-row flex-col">
      <div className=" flex flex-wrap items-center justify-center pr-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-500 hover:bg-transparent hover:text-sky-500 hover:border-sky-500 hover:border text-white font-bold py-2.5 px-6 rounded transform hover:scale-105 ease-in-out duration-300"
        >
          <span className="pr-2 h-1">⬅</span>
          Volver
        </button>
      </div>
      <div className="text-center w-full">
        <h1 className=" text-3xl my-5 text-center text-sky-500">{title}</h1>
      </div>
    </div>
  );
}

export default CUHeader;
