import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './pages/sections';
import { UnderConstruction, Home } from './pages';
import { NavBar } from './components';
//import { useEffect } from "react";

import { useNavCtx } from './contexts/navContext';

const App = () => {
  const { location, goToSection } = useNavCtx();
  // NavBar.cb sets location but should also go to location
  // then remove goto from useEffect Home and place in nav context

  return (
    <>
      <NavBar cb={goToSection} />
      <main>
        <Routes>
          <Route path="/" element={<Home location={location} />} />
          <Route path="/shop" element={<UnderConstruction />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
