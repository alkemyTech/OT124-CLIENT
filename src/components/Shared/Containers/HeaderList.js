import React from "react";
import { Link } from "react-router-dom";

function HeaderList(props) {
  const { title, name, addTitle } = props;
  return (
    <div className="flex sm:flex-row flex-col justify-center px-6">
      <h1 className="sm:text-5xl text-3xl text-center text-sky-500 sm:pr-20 mb-10">{title}</h1>
      <div className="text-center mb-8">
        <Link to={`crear-${name}`} className='text-center py-4'>
          <button className=" bg-green-600 text-sm sm:text-lg  text-white shadow shadow-green-800 rounded-sm px-8 py-4 hover:bg-green-700 transform ease-in-out duration-300 hover:scale-105">
            {addTitle}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderList;
