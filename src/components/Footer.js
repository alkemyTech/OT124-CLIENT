import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-screen m-0 p-5 md:p-10">
      <footer className="mt-5 w-100 grid justify-items-center md:justify-items-stretch">
        <nav className="grid md:flex justify-between align-center font-bold">
          <ul className="grid justify-items-center text-center md:flex md:w-1/2 md:justify-between md:items-center">
            <Link className="text-sky-500" to="/noticias">
              Noticias
            </Link>
            <Link className="text-sky-500" to="/actividades">
              Actividades
            </Link>
            <Link className="text-sky-500" to="/novedades">
              Novedades
            </Link>
          </ul>
          <img
            className="px-5 h-20 md:h-40 md:px-20"
            src="images/logo-somos-mas.png"
            alt="logo-somos-mas"
          />
          <ul className="grid justify-items-center md:flex md:w-1/2 md:justify-between md:items-center">
            <Link className="text-sky-500" to="/testimonios">
              Testimonios
            </Link>
            <Link className="text-sky-500" to="/nosotros">
              Nosotros
            </Link>
            <Link className="text-sky-500" to="/contacto">
              Contacto
            </Link>
          </ul>
        </nav>
        <div className="m-5 md:m-0 w-full h-px bg-black bg-opacity-50 justify-self-center"></div>
        <div className="flex flex-wrap justify-center gap-5 m-10">
          <a target="_blank" href="https://www.instagram.com/SomosM%C3%A1s">
            <img className="h-10" src="images/instagram.png"></img>
          </a>
          <a target="_blank" href="https://www.facebook.com/Somos_M%C3%A1s">
            <img className="h-10" src="images/facebook.png"></img>
          </a>
          <a target="_blank" href="https://wa.link/0dnoj7">
            <img className="h-10" src="images/whatsapp.png"></img>
          </a>
        </div>
        <span className="justify-self-center">
          2021 by Alkemy. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
