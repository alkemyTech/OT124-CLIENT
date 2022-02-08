import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { deleteUserData } from '../features/authSlice';

export default function Header() {
    const [ hamburguerOpened, setHamburguerOpened ] = useState(false);
    const dispach = useDispatch()
    const history = useNavigate()
    let activeClassName = "mr-6 text-slate-300 ";
    let desactiveClassName = "mr-6 text-sky-500 ";
    const a = 'block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4';

    const navItems = [
        <NavLink exact to='/' className={({ isActive }) => isActive ? activeClassName + a : desactiveClassName + a}>Inicio</NavLink >,
        <NavLink className={({ isActive }) => isActive ? activeClassName + a : desactiveClassName + a} to='/nosotros'>Nosotros</NavLink >,
        <NavLink className={({ isActive }) => isActive ? activeClassName + a : desactiveClassName + a} to='/actividades'>Actividades</NavLink >,
        <NavLink className={({ isActive }) => isActive ? activeClassName + a : desactiveClassName + a} to='/novedades'>Novedades</NavLink >,
        <NavLink className={({ isActive }) => isActive ? activeClassName + a : desactiveClassName + a} to='/testimonios'>Testimonios</NavLink >,
        <NavLink className={({ isActive }) => isActive ? activeClassName + a : desactiveClassName + a} exact to='/contacto'>Contacto</NavLink >,
        <NavLink className={({ isActive }) => isActive ? activeClassName + a : desactiveClassName + a} to='/contribuye'>Contribuye</NavLink >
    ];

    const openHamburguerMenu = () => {
      setHamburguerOpened(prevState => !prevState);
    }

    const userData = ''
    const handleCloseSesion = () => {
        dispach(deleteUserData())
        history('/')
    }
    return (
      <nav class="flex items-center justify-between flex-wrap p-6">
        <img className='ml-4 mr-8' width='100' src='https://drive.google.com/uc?export=view&id=1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi' alt='logo' />
        <div class="block lg:hidden">
          <button onClick={openHamburguerMenu} class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        
        <div style={{display: hamburguerOpened ? 'flex' : 'none'}} id='navbar' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto flex-col">
          <div class="text-sm lg:flex-grow">
            {
              navItems
            }
          </div>
          <div>
            {!userData ?
              <Fragment>
                <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-sky-500 border-sky-500 mt-4 lg:mt-0 bg-transparent hover:bg-sky-500 text-sky-500 hover:border-transparent hover:text-white'>Log in</button>
                <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-sky-500 mt-4 lg:mt-0 bg-sky-500 hover:bg-sky-700'>Registrate</button>
              </Fragment>
              :
              <button onClick={handleCloseSesion} class="inline-block text-sm px-4 py-2 leading-none border rounded text-sky-500 border-sky-500 mt-4 lg:mt-0">Cerrar sesion</button>
            }
          </div>
        </div>
      </nav>
    );
}