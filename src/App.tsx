import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Footer, Home } from "./pages/sections";
import { NavBar } from "./components";
import { useEffect, useState } from "react";
import { UnderConstruction } from "./pages";

import Location from "./constants/Location";

const App = () => {
    const [location, setLocation] = useState(Location.TOP);

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <>
            <NavBar cb={setLocation} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<UnderConstruction />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
