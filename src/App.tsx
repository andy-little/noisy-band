import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Socials } from "./components/common";
import { socialAndContactIcons } from "./constants/SocialIcons";
import { Button, LinkBtn } from "./components/common";
import Colour from "./constants/Colour";
import { Section } from "./components/common";

const App = () => {
    return (
        <>
            <Section colour={Colour.PRIMARY}>
                <Socials data={socialAndContactIcons} />
            </Section>
            <Section colour={Colour.TERTIARY}>
                <h1>Cuckoo's Nest</h1>
                <h2>Out Now!</h2>
                <Button
                    options={{ colour: Colour.PRIMARY }}
                    cb={() => console.log("thing")}
                >
                    Listen
                </Button>
                <LinkBtn
                    url="https://www.google.com"
                    options={{ colour: Colour.PRIMARY }}
                >
                    Google
                </LinkBtn>
            </Section>
        </>
    );
};

export default App;
