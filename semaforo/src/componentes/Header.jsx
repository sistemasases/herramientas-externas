import React from 'react';
import '../css/header.css'; 
import logoVicerrectoria from '../images/logoVicerrectoria.svg'

function Header() {
    return (
        <header className="header">
            <nav>
            <h1>SEMÁFORO DE ALERTAS</h1>
                <img id='logo' src={logoVicerrectoria} alt="Logo" /> 
            </nav>
        </header>
    );
}

export default Header;
