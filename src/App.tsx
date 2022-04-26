import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Footer, Home } from "./pages/sections";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
