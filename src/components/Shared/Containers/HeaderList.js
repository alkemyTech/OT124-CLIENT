import React from "react";
import { Link } from "react-router-dom";

function HeaderList(props) {
  const { title, name, addTitle } = props;
  return (
    <div className="flex sm:flex-row flex-col  items-center justify-around my-7 px-6">
      <h1 className="sm:text-5xl text-3xl text-center text-sky-500 sm:pr-20">{title}</h1>
      <div className="py-10 text-center">
        <Link to={`crear-${name}`}>
          <button className=" bg-green-600 text-sm sm:text-lg text-white shadow shadow-green-800 rounded-sm px-8 py-4 hover:bg-green-700 transform ease-in-out duration-300 hover:scale-105">
            {addTitle}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderList;
