import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './pages/sections';
import { UnderConstruction, Home } from './pages';
import { NavBar } from './components';

const App = () => {
  return (
    <>
      <i id="home" />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<UnderConstruction />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
