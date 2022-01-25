import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const navItems = [
        <Link to='/inicio'>Inicio</Link>, 
        <Link to='/nosotros'>Nosotros</Link>,
        <Link to='/actividades'>Actividades</Link>,
        <Link to='/novedades'>Novedades</Link>,
        <Link to='/testimonios'>Testimonios</Link>,
        <Link to='/contacto'>Contacto</Link>,
        <Link to='/contribuye'>Contribuye</Link>
    ];

    return (
        <header>
            <img src='' alt='logo' />
            <nav>
                {
                    navItems
                }
            </nav>
        </header>
    );
}

export default Header;