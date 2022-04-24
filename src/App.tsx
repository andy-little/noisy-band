import "./style/App.scss";
import { Socials } from "./components/common";
import { socialAndContactIcons } from "./constants/SocialIcons";
import { Button, BtnClr } from "./components/common";

const App = () => {
    return (
        <>
            <Socials data={socialAndContactIcons} />
            <h1>Cuckoo's Nest</h1>
            <h2>Out Now!</h2>
            <Button colour={BtnClr.PRIMARY}>Listen</Button>
        </>
    );
};

export default App;
