import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate,NavLink} from 'react-router-dom';
import { deleteUserData } from '../features/authSlice';

export default function Header() {
    const dispach = useDispatch()
    const history = useNavigate()
    let activeClassName = "mr-6 text-slate-300";
    let desactiveClassName = "mr-6 text-sky-500";
    const navItems = [
        <NavLink  exact to='/'className={({ isActive }) =>isActive ? activeClassName : desactiveClassName }>Inicio</NavLink >, 
        <NavLink className={({ isActive }) =>isActive ? activeClassName : desactiveClassName} to='/nosotros'>Nosotros</NavLink >,
        <NavLink className={({ isActive }) =>isActive ? activeClassName : desactiveClassName} to='/actividades'>Actividades</NavLink >,
        <NavLink className={({ isActive }) =>isActive ? activeClassName : desactiveClassName } to='/novedades'>Novedades</NavLink >,
        <NavLink className={({ isActive }) =>isActive ? activeClassName : desactiveClassName } to='/testimonios'>Testimonios</NavLink >,
        <NavLink  className={({ isActive }) =>isActive ? activeClassName : desactiveClassName} exact to='/contacto'>Contacto</NavLink >,
        <NavLink className={({ isActive }) =>isActive ? activeClassName : desactiveClassName} to='/contribuye'>Contribuye</NavLink >
    ];

    const userData = 's'
    const handleCloseSesion = () => {
        dispach(deleteUserData())
        history('/')
    }
    return (
        <header className='flex items-center py-1.5'>
            <img className='ml-4 mr-8' width='100' src='https://drive.google.com/uc?export=view&id=1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi' alt='logo' />
            <nav>
                {
                    navItems
                }
            </nav>
            <div className='flex ml-32'>
                {!userData ?
                <>
                <button className='bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded mr-3'>Log in</button>
                <button className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-1.5 px-6 rounded'>Registrate</button>
                </>
                : 
                <button onClick={handleCloseSesion} className='bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded mr-3'>Cerrar Sesion</button>
                }
                
            </div>
        </header>
    );
}