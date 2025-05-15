import Header from "./componentes/Header/Header.jsx";
import { useState, useEffect } from 'react';
import MainSection from "./componentes/MainSection.jsx";
import BottomNavigation from "./componentes/BottomNavigation/BottomNavigation.jsx";
import PageContainer from "./componentes/PageContainer/PageContainer.jsx";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About.jsx"; // Importa a página "Quem Somos"
import Missao from "./pages/Missao.jsx"; // Importa a página "Missão"
import Glossario from "./pages/Glossario.jsx"; // Importa a página "Glossário"
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define como "mobile" se a largura for menor ou igual a 768px
    };

    handleResize(); // Verifica o tamanho inicial
    window.addEventListener('resize', handleResize); // Adiciona o listener para mudanças de tamanho

    return () => window.removeEventListener('resize', handleResize); // Remove o listener ao desmontar
  }, []);

  return (
    <div className="App">
      <PageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} /> {/* Página inicial */}
          <Route path="/about" element={<About />} /> {/* Página Quem Somos */}
          <Route path="/missao" element={<Missao />} /> {/* Página Missão */}
          <Route path="/glossario" element={<Glossario />} /> {/* Página Missão */}
        </Routes>
        {!isMobile && <BottomNavigation />} {/* Renderiza o BottomNavigation apenas em telas maiores */}
      </PageContainer>
    </div>
  );
}

export default App;