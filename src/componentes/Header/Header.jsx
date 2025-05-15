import React, { useState } from "react";
import "./Header.css";
import LogoITC from "../Logo/Logo.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <LogoITC />
        </div>
        <h1 className="titulo-header">INSTITUTO TERAPEUTAS CANNÁBICOS</h1>
        <nav className="menu-container">
          <ul className="menu-list">
            <li className="menu-item">
              <span className="menu-button">MENU</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/" className="dropdown-item">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="dropdown-item">Quem Somos</Link>
                </li>
                <li>
                  <Link to="/missao" className="dropdown-item">Missão</Link>
                </li>
                <li>
                  <Link to="/glossario" className="dropdown-item">Glossário</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;