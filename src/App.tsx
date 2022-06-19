import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./pages/sections";
import { UnderConstruction, Home } from "./pages";
import { NavBar } from "./components";
//import { useEffect } from "react";

import { useNavCtx } from "./contexts/navContext";

const App = () => {
    const { location, setLocation } = useNavCtx();

    return (
        <>
            <NavBar cb={setLocation} />
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
