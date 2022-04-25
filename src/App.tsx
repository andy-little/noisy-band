import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Socials } from "./components/common";
import { socialAndContactIcons } from "./constants/SocialIcons";
import { Button, BtnClr, LinkBtn } from "./components/common";

const App = () => {
    return (
        <>
            <Socials data={socialAndContactIcons} />
            <h1>Cuckoo's Nest</h1>
            <h2>Out Now!</h2>
            <Button
                options={{ colour: BtnClr.PRIMARY }}
                cb={() => console.log("thing")}
            >
                Listen
            </Button>
            <LinkBtn
                url="https://www.google.com"
                options={{ colour: BtnClr.PRIMARY }}
            >
                Google
            </LinkBtn>
        </>
    );
};

export default App;
