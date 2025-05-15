import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavigation.css';

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/about" className="nav-item">Quem Somos</Link>      
      <Link to="/missao" className="nav-item">Missão</Link>
      <Link to="/glossario" className="nav-item">Glossário</Link>
    </nav>
  );
}