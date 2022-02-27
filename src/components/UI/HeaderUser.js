import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { deleteUserData, selectUserData } from "../../features/authSlice";
import activitiesIcon from "../../img/icons/activities.png";
import categoriesIcon from "../../img/icons/categories.png";
import membersIcon from "../../img/icons/members.png";
import newsIcon from "../../img/icons/news.png";
import organizationIcon from "../../img/icons/organization.png";
import slidesIcon from "../../img/icons/slides.png";
import testimonialsIcon from "../../img/icons/testimonials.png";
import usersIcon from "../../img/icons/users.png";
import contactsIcon from "../../img/icons/contacts.png";
import logo from "../../img/logo-somos-mas.png";

export default function HeaderUser() {
  const [hamburguerOpened, setHamburguerOpened] = useState(false);
  const dispach = useDispatch();
  const history = useNavigate();
  const userData = useSelector(selectUserData);
  let activeClassName = "text-sky-600 ";
  let desactiveClassName = "text-sky-400 ";
  const a =
    "mt-2 py-2 px-1 inline-flex text-md hover:text-black mr-4 transform hover:scale-105 ease-in duration-300";

  const navItemsAdmin = [
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/organizacion"
    >
      <img
        src={organizationIcon}
        alt=""
        className="h-5 md:h-5 mr-2 sm:hidden"
      />
      Organización
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/actividades"
    >
      <img src={activitiesIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Actividades
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/novedades"
    >
      <img src={newsIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Novedades
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/testimonios"
    >
      <img
        src={testimonialsIcon}
        alt=""
        className="h-5 md:h-5 mr-2 sm:hidden"
      />
      Testimonios
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      exact
      to="/backoffice/contactos"
    >
      <img src={contactsIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Contactos
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/slides"
    >
      <img src={slidesIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Slides
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/miembros"
    >
      <img src={membersIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Miembros
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/categorias"
    >
      <img src={categoriesIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Categorias
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/backoffice/usuarios"
    >
      <img src={usersIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Usuarios
    </NavLink>,
  ];

  const openHamburguerMenu = () => {
    setHamburguerOpened((prevState) => !prevState);
  };

  const handleCloseSesion = () => {
    dispach(deleteUserData());
    history("/");
  };
  return (
    <>
      <nav class="flex sm:text-lg text-sm items-center flex-wrap justify-between p-6">
        <img
          className="lg:ml-4 -ml-1 mr-8 inline-flex"
          width="100"
          src={logo}
          alt="logo"
        />
        <div class="flex text-right lg:hidden ">
          <button
            onClick={openHamburguerMenu}
            class="flex items-center px-3 py-2 border rounded text-sky-500 border-sky-500"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          style={{ display: hamburguerOpened ? "flex" : "none" }}
          id="navbar"
          className="w-full flex-grow lg:!flex lg:!flex-row lg:items-center lg:w-auto flex-col justify-center"
        >
          <div class="flex flex-col sm:flex-row flex-wrap">
            <div className="sm:hidden flex justify-center items-center flex-col">
              <div className=" bg-sky-500 opacity-30 w-[100px] h-[100px] rounded-full"></div>
              {userData?.firstName} {userData?.lastName}
            </div>
            {navItemsAdmin}
          </div>
          <div className="flex mx-auto my-auto items-center justify-center">
            {userData && (
              <>
                <button
                  onClick={handleCloseSesion}
                  className="inline-block px-4 py-2 leading-none border rounded text-sky-500 border-sky-500 mt-4 lg:mt-0 hover:bg-sky-500 hover:border-transparent hover:text-white transform hover:scale-105 ease-in duration-300"
                >
                  Cerrar sesion
                </button>
                {userData?.role === "user" ? (
                  <Link
                    to={`mi-perfil`}
                    onClick={openHamburguerMenu}
                    className="inline-block mx-4 px-4 py-2 leading-none border rounded text-white border-sky-500 mt-4 lg:mt-0 bg-sky-500 hover:bg-sky-700 transform hover:scale-105 ease-in duration-300"
                  >
                    Mi Perfil
                  </Link>
                ) : (
                  <Link
                    to={`backoffice`}
                    onClick={openHamburguerMenu}
                    className="inline-block my-auto mx-4 px-4 py-2 leading-none border rounded text-white border-sky-500 mt-4 lg:mt-0 bg-sky-500 hover:bg-sky-700 transform hover:scale-105 ease-in duration-300"
                  >
                    Backoffice
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
