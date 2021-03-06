import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { deleteUserData, selectUserData } from "../../features/authSlice";
import logo from "../../img/logo-somos-mas.png";

export default function Header() {
  const [hamburguerOpened, setHamburguerOpened] = useState(false);
  const dispach = useDispatch();
  const history = useNavigate();
  const userData = useSelector(selectUserData);
  let activeClassName = "mr-6 text-slate-300 ";
  let desactiveClassName = "mr-6 text-sky-500 ";
  const a =
    "block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4 transform hover:scale-105 ease-in duration-300";

  const openHamburguerMenu = () => {
    setHamburguerOpened((prevState) => !prevState);
  };

  const navItems = [
    <NavLink
      exact
      to="/"
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
    >
      Inicio
    </NavLink>,
    <NavLink
      onClick={openHamburguerMenu}
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/nosotros"
    >
      Nosotros
    </NavLink>,
    <NavLink
      onClick={openHamburguerMenu}
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/actividades"
    >
      Actividades
    </NavLink>,
    <NavLink
      onClick={openHamburguerMenu}
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/novedades"
    >
      Novedades
    </NavLink>,
    <NavLink
      onClick={openHamburguerMenu}
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/testimonios"
    >
      Testimonios
    </NavLink>,
    <NavLink
      onClick={openHamburguerMenu}
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      exact
      to="/contacto"
    >
      Contacto
    </NavLink>,
    <NavLink
      onClick={openHamburguerMenu}
      className={({ isActive }) =>
        isActive ? activeClassName + a : desactiveClassName + a
      }
      to="/contribuye"
    >
      Contribuye
    </NavLink>,
  ];

  const handleCloseSesion = () => {
    dispach(deleteUserData());
    history("/");
  };
  return (
    <nav class="flex sm:text-lg text-sm items-center flex-wrap lg:flex-nowrap justify-between p-6">
      <Link to="/">
        <img
          className="lg:ml-4 -ml-1 mr-8 inline-flex"
          width="100"
          src={logo}
          alt="logo"
        />
      </Link>
      <div class="block lg:hidden">
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
        <div class=" ">{navItems}</div>
        <div className="flex mx-auto">
          {!userData ? (
            <Fragment>
              <Link
                to={`login`}
                onClick={openHamburguerMenu}
                className="inline-block mx-4 px-4 py-2 leading-none border rounded text-sky-500 border-sky-500 mt-4 lg:mt-0 bg-transparent hover:bg-sky-500 hover:border-transparent hover:text-white transform hover:scale-105 ease-in duration-300"
              >
                Log in
              </Link>
              <Link
                to={`signup`}
                onClick={openHamburguerMenu}
                className="inline-block mx-4 px-4 py-2 leading-none border rounded text-white border-sky-500 mt-4 lg:mt-0 bg-sky-500 hover:bg-sky-700 transform hover:scale-105 ease-in duration-300"
              >
                Registrate
              </Link>
            </Fragment>
          ) : (
            <>
              <button
                onClick={handleCloseSesion}
                class="inline-block px-4 py-2 leading-none border rounded text-sky-500 border-sky-500 mt-4 lg:mt-0 hover:bg-sky-500 hover:border-transparent hover:text-white transform hover:scale-105 ease-in duration-300"
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
                  className="inline-block mx-4 px-4 py-2 leading-none border rounded text-white border-sky-500 mt-4 lg:mt-0 bg-sky-500 hover:bg-sky-700 transform hover:scale-105 ease-in duration-300"
                >
                  Backoffice
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
