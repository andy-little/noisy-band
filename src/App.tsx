import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './pages/sections';
import { UnderConstruction, Home } from './pages';
import { NavBar } from './components';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<UnderConstruction />} />
          <Route path="/contact" element={<UnderConstruction />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
