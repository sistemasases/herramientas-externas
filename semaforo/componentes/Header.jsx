import React from 'react';
import lines from '../images/lines.png'; 
import '../css/header.css'; 

function Header() {
    return (
        <header className="header">
            <nav>
                <img src={lines} alt="Logo" className="header-logo" /> 
                <h1>SEMAFORO DE ALERTAS</h1>
            </nav>
        </header>
    );
}

export default Header;
