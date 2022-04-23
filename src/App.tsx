import "./App.css";
import { Socials } from "./components/common";
import { socialAndContactIcons } from "./constants/SocialIcons";

const App = () => {
    return (
        <>
            <Socials data={socialAndContactIcons} />
        </>
    );
};

export default App;
