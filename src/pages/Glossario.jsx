import React, { useState } from 'react';
import './styles.css'; // Reutiliza o mesmo CSS para manter o estilo consistente
import GlossarioImg from '../assets/maconha.jpg'; // Substitua pelo caminho correto da imagem

export default function Glossario() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const topics = [
    { term: "Cannabis", definition: "Nome científico da planta, usada para diversos fins medicinais, recreativos e industriais." },
    { term: "THC (Tetrahidrocanabinol)", definition: "Principal composto psicoativo da maconha, responsável pelos efeitos de euforia e relaxamento." },
    { term: "CBD (Canabidiol)", definition: "Composto não psicoativo da maconha, conhecido por seus potenciais benefícios terapêuticos, como alívio da dor e ansiedade." },
    { term: "Strain (Variedade)", definition: "Diferentes tipos de maconha, como Sativa, Indica e Híbrida, cada uma com efeitos distintos." },
    { term: "Sativa", definition: "Variedade da cannabis associada a efeitos estimulantes, criativos e energizantes." },
    { term: "Indica", definition: "Variedade que tende a gerar relaxamento, sedação e alívio do estresse." },
    { term: "Híbrida", definition: "Cruzamento entre Sativa e Indica, resultando em efeitos balanceados." },
    { term: "Blunt", definition: "Charuto recheado com maconha, muitas vezes misturado com tabaco." },
    { term: "Baseado", definition: "Cigarro artesanal feito com maconha, popularmente conhecido em algumas regiões como 'joint' ou 'fininho'." },
    { term: "Vape (Vaporizador)", definition: "Dispositivo usado para inalar cannabis sem combustão, produzindo vapor em vez de fumaça." },
    { term: "Extratos (Concentrados)", definition: "Formas purificadas de cannabis, como haxixe, óleo, resina e shatter, que contêm altos níveis de THC ou CBD." },
    { term: "Dab", definition: "Método de consumo de concentrados de cannabis, aquecendo e inalando vapor de shatter ou óleo." },
    { term: "Edibles (Comestíveis)", definition: "Produtos alimentícios infundidos com cannabis, como brownies, balas e bebidas." },
    { term: "Decarboxilação", definition: "Processo de ativação dos compostos da cannabis pelo calor, essencial para fazer comestíveis." },
    { term: "420", definition: "Código cultural associado ao consumo de maconha, originado nos EUA e usado mundialmente." },
    { term: "Legalização", definition: "Processo de regulamentação do uso medicinal ou recreativo da cannabis em diferentes países e estados." },
  ];

  const itemsPerPage = 3; // Número de tópicos por slide
  const totalSlides = Math.ceil(topics.length / itemsPerPage);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const currentTopics = topics.slice(
    currentSlide * itemsPerPage,
    currentSlide * itemsPerPage + itemsPerPage
  );

  return (
    <div className="about">
      <div className="about-content">
        <img
          src={GlossarioImg}
          alt="Glossário"
          className="about-image"
        />
        <div className="about-text">
          <h1>Glossário em Construção</h1>
          <ul style={{ textAlign: 'left', fontSize: '0.8rem', lineHeight: '1.8', color: '#d08712' }}>
            {currentTopics.map((topic, index) => (
              <li key={index}>
                <strong>{topic.term}</strong> – {topic.definition}
              </li>
            ))}
          </ul>
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
              disabled={currentSlide === totalSlides - 1} // Desabilita o botão no último slide
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}