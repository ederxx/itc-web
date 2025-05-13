import React from 'react';
import Header from '../componentes/Header/Header';
import MainSection from './MainSection';
import BottomNavigation from '../componentes/BottomNavigation';
import './HomePage.css'; // Crie este arquivo CSS

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <MainSection />
      <BottomNavigation />
    </div>
  );
}

export default HomePage;