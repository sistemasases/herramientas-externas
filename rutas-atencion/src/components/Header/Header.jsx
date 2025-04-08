import React from 'react';
import './Header.css'
import logoVicerrectoria from '../../assets/logoVicerrectoria.svg'

function Header() {
  return (
    <header className="header">
      <h1>RUTAS DE ATENCIÓN</h1>
      <img src={logoVicerrectoria} alt="Logo Vicerrectoria" />
    </header>
  );
}

export default Header;