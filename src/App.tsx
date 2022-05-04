import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./pages/sections";
import { UnderConstruction, Home } from "./pages";
import { NavBar } from "./components";
import { useEffect, useState } from "react";

import Location from "./constants/Location";

const App = () => {
    const [location, setLocation] = useState(Location.TOP);

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <>
            <NavBar cb={setLocation} />
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
