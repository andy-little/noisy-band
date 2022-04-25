import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Quote, Socials } from "./components/common";
import { socialAndContactIcons } from "./constants/SocialIcons";
import { Button, LinkBtn } from "./components/common";
import Colour from "./constants/Colour";
import { Section } from "./components/common";
import { Home } from "./pages/sections";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
