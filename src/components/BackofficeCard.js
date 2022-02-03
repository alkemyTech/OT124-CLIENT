import React from "react";
import { Link } from "react-router-dom";

export default function BackofficeCard(props) {
  return (
    <div className="w-48 h-48 border-1 rounded-lg p-6 grid justify-items-center gap-2 shadow-lg hover:shadow-2xl">
      <span>{props.title}</span>
      <img src={props.image} className="h-20"></img>
      <Link
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold px-4 rounded"
        to={props.navlink}
      >
        IR
      </Link>
    </div>
  );
}
