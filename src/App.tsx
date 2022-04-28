import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Footer, Home } from "./pages/sections";
import { NavBar } from "./components";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
