import React from 'react';
import './MainSection.css';
import Img from './Img/Img';
import Remed from '../assets/remedio.png';
import Medic from '../assets/medica.png';
import Glossa from '../assets/terap.png';

export default function MainSection() {
  return (
    <>
      
 


      <main className="main-section">
        <div className="icons-container">
          <div className="icon-item">
            <Img src={Medic} alt="Medicamento" />
            <p>MEDICAMENTOS</p>
          </div>
          <div className="icon-item">
            <Img src={Remed} alt="Óleo" />
            <p>ÓLEO</p>
          </div>
          <div className="icon-item">
            <Img src={Glossa} alt="Glossário" />
            <p>GLOSSÁRIO</p>
          </div>
        </div>

   
      </main>
    </>
  );
}
