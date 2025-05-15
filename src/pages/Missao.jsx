import React, { useState } from 'react';
import './styles.css';
import MissaoImg1 from '../assets/maconha.jpg'; // Substitua pelo caminho correto da imagem
import MissaoImg2 from '../assets/maconha2.jpg'; // Substitua pelo caminho correto da imagem
import MissaoImg3 from '../assets/maconha3.jpg'; // Substitua pelo caminho correto da imagem

export default function Missao() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: "Nossa missão é fortalecer redes de apoio, ampliar o acesso à educação em saúde e contribuir para a produção de conhecimento a partir das vivências dos territórios. Atuamos como guias na jornada com a cannabis, oferecendo acolhimento atento, escuta atenciosa e avaliação individualizada, respeitando a trajetória de cada pessoa.",
      image: MissaoImg1,
    },
    {
      text: "Garantimos suporte terapêutico contínuo, para que o uso das plantas medicinais aconteça de forma segura, consciente e integrada às realidades de quem acompanha conosco.",
      image: MissaoImg2,
    },
    {
      text: "Também seguimos comprometidos com a luta pelos direitos, não apenas ao acesso à cannabis, mas ao direito básico à saúde, ao cuidado digno e a tudo que é necessário para que cada corpo, território e vida possa florescer com autonomia, segurança e justiça.",
      image: MissaoImg3,
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="about">
      <div className="about-content">
        <img
          src={slides[currentSlide].image} // Atualiza a imagem com base no slide atual
          alt="Missão"
          className="about-image"
        />
        <div className="about-text">
          <h1>Missão</h1>
          <p>{slides[currentSlide].text}</p> {/* Atualiza o texto com base no slide atual */}
          <div className="navigation-buttons">
            <button
              onClick={handlePrev}
              className="nav-button"
              disabled={currentSlide === 0} // Desabilita o botão no primeiro slide
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="nav-button"
              disabled={currentSlide === slides.length - 1} // Desabilita o botão no último slide
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}