import React from "react";

export default function Footer() {
  return (
    <div className="w-screen m-0 p-10">
      <footer className="mt-5 w-100 grid">
        <nav className="flex justify-center align-center">
          <ul className="flex grow justify-between items-center">
            <li>Noticias</li>
            <li>Actividades</li>
            <li>Novedades</li>
          </ul>
          <img
            className="p-5"
            src="https://drive.google.com/uc?export=view&id=1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi"
            alt="logo-somos-mas"
          />
          <ul className="flex grow justify-between items-center">
            <li>Testimoninos</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <div className="w-full h-px bg-black bg-opacity-50 justify-self-center"></div>
        <div className="redes">
          <a></a>
          <a></a>
          <a></a>
        </div>
        <span>2021 by Alkemy. All Rights Reserved.</span>
      </footer>
    </div>
  );
}
