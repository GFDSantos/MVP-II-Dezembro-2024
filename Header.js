// src/components/Header.js
import { Link } from 'react-router-dom';
import React from 'react';
import './style.css'; // Arquivo de estilos do Header
import logo from "../../images/logo_cury.png" // Certifique-se de ter a imagem do logo neste caminho

const Header = () => {
return (
    <header className="header">
    <Link to="/">
        <img src={logo} alt="Logo Construtora Cury" className="logo" />
    </Link>
    <nav className="nav">
        <Link to="/about" className="nav-link">Empreendimentos</Link>
        <Link to="/contact" className="nav-link">Fale Conosco</Link>
    </nav>
    </header>
);
};

export default Header;
