import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './pages/sections';
import { UnderConstruction, Home } from './pages';
import { NavBar } from './components';
// import Location from './constants/Location';
// import { locationState } from './interfaces/locationState';
//import { useEffect } from "react";

// import { useNavCtx } from './contexts/navContext';

const App = () => {
  // const { location, setLocation } = useNavCtx();
  // const navCb = (value: Location) => {
  //   setLocation((prevLoc: locationState) => {
  //     return {
  //       location: value,
  //       changes:
  //         value === Location.NONE ? prevLoc.changes : prevLoc.changes + 1,
  //     };
  //   });
  // };

  return (
    <>
      <NavBar /* cb={navCb} */ />
      <main>
        <Routes>
          <Route path="/" element={<Home /* {...location} */ />} />
          <Route path="/shop" element={<UnderConstruction />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
