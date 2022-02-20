import React from "react";
import { Link } from "react-router-dom";

export default function BackOfficeCard(props) {
  return (
    <div className="md:w-48 w-32 md:h-48 h-32 border-1 rounded-lg p-2 md:p-6 grid justify-items-center gap-2 shadow-lg hover:shadow-2xl">
      <span>{props.title}</span>
      <img src={props.image} className="h-10 md:h-20"></img>
      <Link
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded"
        to={props.navlink}
      >
        IR
      </Link>
    </div>
  );
}
