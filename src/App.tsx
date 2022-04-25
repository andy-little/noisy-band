import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
import { Quote, Socials } from "./components/common";
import { socialAndContactIcons } from "./constants/SocialIcons";
import { Button, LinkBtn } from "./components/common";
import Colour from "./constants/Colour";
import { Section } from "./components/common";

const App = () => {
    return (
        <>
            <Section colour={Colour.TERTIARY}>
                <Socials data={socialAndContactIcons} />
            </Section>
            <Section colour={Colour.PRIMARY}>
                <h1>Cuckoo's Nest</h1>
                <h2>Out Now!</h2>
                <Quote author="the crazy coqs" colour={Colour.PRIMARY}>
                    Fat, greasy, stinking funk, wrapped up in Andy Little's
                    mellifluous arrangements, served up by London's finest.
                </Quote>
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
