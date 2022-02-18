import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-somos-mas.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import { getOrganizationData } from '../services/organization';

export default function Footer() {
  const [ socialMedia, setSocialMedia ] = useState({});

  const fetchOrganizationSocials = async id => {
    const response = await getOrganizationData(id);
    setSocialMedia(response?.data.socials);
  }

  useEffect(() => {
    fetchOrganizationSocials(1);
  }, []);

  return (
    <div className="w-100 mt-3 px-1 md:px-5">
      <footer className="mt-5 grid justify-items-center md:justify-items-stretch">
        <nav className="font-bold grid justify-items-center text-center md:flex md:justify-between md:items-center">
          <Link className="text-sky-500" to="/noticias">
            Noticias
          </Link>
          <Link className="text-sky-500" to="/actividades">
            Actividades
          </Link>
          <Link className="text-sky-500" to="/novedades">
            Novedades
          </Link>
          <img
            className="px-5 h-20 md:h-40 md:px-20"
            src={logo}
            alt="logo-somos-mas"
          />
          <Link className="text-sky-500" to="/testimonios">
            Testimonios
          </Link>
          <Link className="text-sky-500" to="/nosotros">
            Nosotros
          </Link>
          <Link className="text-sky-500" to="/contacto">
            Contacto
          </Link>
        </nav>
        <div className="m-5 md:m-0 w-full h-px bg-black bg-opacity-50 justify-self-center"></div>
        <div className="flex flex-wrap justify-center gap-5 m-10">
          <a target="_blank" rel='noreferrer' href={socialMedia.instagram}>
            <img className="h-10" alt='instagram' src={instagram}></img>
          </a>
          <a target="_blank" rel='noreferrer' href={socialMedia.facebook}>
            <img className="h-10" alt='facebook' src={facebook}></img>
          </a>
          <a target="_blank" rel='noreferrer' href={socialMedia.linkedin}>
            <img className="h-10" alt='linkedin' src={linkedin}></img>
          </a>
        </div>
        <span className="justify-self-center">
          2021 by Alkemy. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
