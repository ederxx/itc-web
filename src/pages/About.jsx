import React, { useState } from 'react';
import './styles.css';
import Maconha from '../assets/maconha.jpg';
import Maconha2 from '../assets/maconha2.jpg';
import Maconha3 from '../assets/maconha3.jpg';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: "O Instituto Terapeutas Cannábicos (ITC) é um espaço vivo de troca de saberes, cuidado e construção coletiva. Atuamos na formação crítica e libertadora por meio do nosso Grupo de Estudos, que promove encontros regulares baseados no diálogo horizontal, na escuta ativa e na valorização das experiências de cada pessoa. Além de ser um espaço de troca, esse grupo é essencial para a construção de materiais educativos, que muitas vezes são utilizados como ferramentas jurídicas e de aprendizagem, auxiliando na disseminação de informações e na mobilização social em torno da cannabis e da saúde coletiva.",
      image: Maconha,
    },
    {
      text: "Por meio do nosso Grupo Científico, desenvolvemos pesquisas, produzimos conteúdos e sistematizamos saberes, com o compromisso de aprofundar o conhecimento técnico e ampliar a legitimidade das práticas populares e comunitárias. Acreditamos em uma ciência ética e transformadora, que reconhece o valor dos saberes tradicionais e atua na construção de pontes entre a academia, a clínica e a vida nos territórios.",
      image: Maconha2,
    },
    {
      text: "No âmbito dos projetos sociais, o ITC é responsável pelo Projeto Social Cannabis Sem Fronteiras, que envolve rodas de conversa, atendimentos com profissionais da saúde e do direito, além de facilitar a conexão com uma rede de apoio ampla e acolhedora. Através deste projeto, indicamos profissionais associados, que compartilham nossos princípios e ajudam a construir o ITC. Esses profissionais são fundamentais para o acolhimento e os atendimentos em diversas áreas da saúde e do direito, promovendo um cuidado integral e humanizado para as pessoas em nossos territórios.",
      image: Maconha3,
    },
    {
      text: "Cada pessoa que chega ao ITC pode nos ajudar a construir um espaço acolhedor, crítico e comprometido com o cuidado, onde saberes populares e científicos se encontram para transformar realidades.",
      image: Maconha,
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
          alt="about"
          className="about-image"
        />
        <div className="about-text">
          <p>{slides[currentSlide].text}</p>
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