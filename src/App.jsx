import Header from "./componentes/Header/Header.jsx";
import MainSection from "./componentes/MainSection.jsx";
import BottomNavigation from "./componentes/BottomNavigation/BottomNavigation.jsx";
import PageContainer from "./componentes/PageContainer/PageContainer.jsx";



function App() {
  return (
    <div className="App">
       <PageContainer>
      <Header />
      <MainSection />
      <BottomNavigation />
      </PageContainer>
    </div>
  );
}

export default App;
