import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";

export default function BackOfficeCard(props) {
  return (
    <div className="mx-8 lg:w-52 h-32 lg:h-52 w-32 border-1 rounded-lg p-2 md:p-6 grid justify-items-center gap-2 shadow-lg hover:shadow-2xl transform ease-in-out duration-300 hover:scale-105">
      <span>{props.title}</span>
      <img src={props.image} className="h-10 lg:h-20"></img>
      <Link
        className=""
        to={`${props.title!=='Mi Perfil' ? "/backoffice" : ""}${props.navlink}`}
      >
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-xs md:text-sm px-2 md:px-4 rounded">IR</button>
      </Link>
    </div>
  );
}
