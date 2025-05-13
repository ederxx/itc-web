import React, { useState } from "react";
import './Header.css';
import LogoITC from "../Logo/Logo.jsx";
import { Link } from "react-router-dom";


function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
    <div className="header-top">
      <div className="logo">
        <LogoITC />
      </div>
      <h1 className="titulo-header">TERAPEUTAS CANNABICOS
   </h1>
      <div className="menu-container">
        <button className="menu-button" onClick={alternarMenu}>MENU</button>
        {menuAberto && (
          <div className="dropdown-menu">
            <Link to="/" className="dropdown-item">Home</Link>
            <Link to="/quem-somos" className="dropdown-item">Quem Somos</Link>
            <Link to="/missao" className="dropdown-item">Missão</Link>
            <Link to="/glossario" className="dropdown-item">Glossário</Link>
          </div>
        )}
      </div>
    </div>

  </header>
  );
}

export default Header;

