import React from 'react';

function Header() {
  return (
    <nav className='navbar bg-body-tertiary d-flex flex-row w-100 flex-row justify-content-evenly bg-dark'>
      <h1>Mi Aplicación</h1>
      <ul className='d-flex flex-row align-items-center m-0 p-0'>
        <li className='px-3 list-group-item '><a className='text-decoration-none' href="/">Inicio</a></li>
        <li className='px-3 list-group-item '><a className='text-decoration-none' href="/acerca-de">Acerca de</a></li>
        <li className='px-3 list-group-item '><a className='text-decoration-none' href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Header;