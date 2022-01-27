import React from "react";

export default function Footer() {
  return (
    <div className="w-screen m-0 p-5 md:p-10">
      <footer className="mt-5 w-100 grid justify-items-center md:justify-items-stretch">
        <nav className="grid md:flex justify-between align-center font-bold">
          <ul className="grid justify-items-center text-center md:flex md:w-1/2 md:justify-between md:items-center">
            <li>Noticias</li>
            <li>Actividades</li>
            <li>Novedades</li>
          </ul>
          <img
            className="px-5 h-20 md:h-40 md:px-10"
            src="images/logo-somos-mas.png"
            alt="logo-somos-mas"
          />
          <ul className="grid justify-items-center md:flex md:w-1/2 md:justify-between md:items-center">
            <li>Testimoninos</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <div className="m-5 md:m-0 w-full h-px bg-black bg-opacity-50 justify-self-center"></div>
        <div className="flex flex-wrap justify-center gap-5 m-10">
          <a href="">
            <img className="h-10" src="images/instagram.png"></img>
          </a>
          <a href="">
            <img className="h-10" src="images/facebook.png"></img>
          </a>
          <a href="">
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
