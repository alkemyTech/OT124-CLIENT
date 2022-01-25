import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const navItems = [
        <Link className='mr-6 text-sky-500' to='/inicio'>Inicio</Link>, 
        <Link className='mr-6 text-sky-500' to='/nosotros'>Nosotros</Link>,
        <Link className='mr-6 text-sky-500' to='/actividades'>Actividades</Link>,
        <Link className='mr-6 text-sky-500' to='/novedades'>Novedades</Link>,
        <Link className='mr-6 text-sky-500' to='/testimonios'>Testimonios</Link>,
        <Link className='mr-6 text-sky-500' to='/contacto'>Contacto</Link>,
        <Link className='mr-6 text-sky-500' to='/contribuye'>Contribuye</Link>
    ];

    return (
        <header className='flex items-center py-1.5'>
            <img className='ml-4 mr-8' width='100' src='https://drive.google.com/uc?export=view&id=1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi' alt='logo' />
            <nav>
                {
                    navItems
                }
            </nav>
            <div className='flex ml-32'>
                <button className='bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded mr-3'>Log in</button>
                <button className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-1.5 px-6 rounded'>Registrate</button>
            </div>
        </header>
    );
}