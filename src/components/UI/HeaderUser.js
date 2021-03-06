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
import profile from "../../img/icons/profile.png";

export default function HeaderUser() {
  const [hamburguerOpened, setHamburguerOpened] = useState(false);
  const dispach = useDispatch();
  const history = useNavigate();
  const userData = useSelector(selectUserData);
  let activeClassName = "font-bold text-sky-600 ";
  let desactiveClassName = "text-sky-400 ";
  const a =
    "mt-2 py-2 px-1 inline-flex text-md hover:text-black mr-4 transform hover:scale-105 ease-in duration-300";

  const navItemsAdmin = [
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      onClick={()=>setHamburguerOpened(false)}
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
      onClick={()=>setHamburguerOpened(false)}
      to="/backoffice/actividades"
    >
      <img src={activitiesIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Actividades
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      onClick={()=>setHamburguerOpened(false)}
      to="/backoffice/novedades"
    >
      <img src={newsIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Novedades
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      onClick={()=>setHamburguerOpened(false)}
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
      onClick={()=>setHamburguerOpened(false)}
      to="/backoffice/contactos"
    >
      <img src={contactsIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Contactos
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      onClick={()=>setHamburguerOpened(false)}
      to="/backoffice/slides"
    >
      <img src={slidesIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Slides
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      onClick={()=>setHamburguerOpened(false)}
      to="/backoffice/miembros"
    >
      <img src={membersIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Miembros
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      onClick={()=>setHamburguerOpened(false)}
      to="/backoffice/categorias"
    >
      <img src={categoriesIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Categorias
    </NavLink>,
    <NavLink
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      onClick={()=>setHamburguerOpened(false)}
      to="/backoffice/usuarios"
    >
      <img src={usersIcon} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
      Usuarios
    </NavLink>,
     <NavLink
     className={({ isActive }) =>
       isActive ? activeClassName + a : desactiveClassName + a
     }
     onClick={()=>setHamburguerOpened(false)}
     to="/mi-perfil"
   >
     <img src={profile} alt="" className="h-5 md:h-5 mr-2 sm:hidden" />
     Mi Perfil
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
      <nav class="flex sm:text-md text-sm items-center flex-wrap lg:flex-nowrap justify-between p-6 bg-slate-200">
        <Link to='/' className=" inline-flex">
        <img
          className="lg:ml-4 -ml-1 mr-8 inline-flex"
          width="100"
          src={logo}
          alt="logo"
        />
        </Link>        
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
          <div class="flex flex-col lg:flex-row flex-wrap">
            <div className="sm:hidden flex justify-center items-center flex-col">
              <img src={profile} className="w-[100px] h-[100px] rounded-full mb-1" alt='' />
              {userData?.firstName} {userData?.lastName}
            </div>
            {navItemsAdmin}
          </div>
          <div className="flex items-center mx-auto justify-center">
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
                    to={`/backoffice`}
                    onClick={openHamburguerMenu}
                    className="block mx-4 px-4 py-2 leading-none border rounded text-white border-sky-500 mt-4 lg:mt-0 bg-sky-500 hover:bg-sky-700 transform hover:scale-105 ease-in duration-300"
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
