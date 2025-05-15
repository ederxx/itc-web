import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import './MainSection.css';
import Img from './Img/Img';
import Remed from '../assets/remedio.png';
import Medic from '../assets/medica.png';
import Glossa from '../assets/terap.png';

export default function MainSection() {
  return (
    <main className="main-section">
      <div className="icons-container">
        <div className="icon-item">
          <Link to="/"> {/* Redireciona para a página de Medicamentos */}
            <Img src={Medic} alt="Medicamento" />
            <p>MEDICAMENTOS</p>
          </Link>
        </div>
        <div className="icon-item">
          <Link to="/about"> {/* Redireciona para a página de Óleo */}
            <Img src={Remed} alt="Óleo" />
            <p>ÓLEO</p>
          </Link>
        </div>
        <div className="icon-item">
          <Link to="/glossario"> {/* Redireciona para a página de Glossário */}
            <Img src={Glossa} alt="Glossário" />
            <p>GLOSSÁRIO</p>
          </Link>
        </div>
      </div>
    </main>
  );
}