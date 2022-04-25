import style from "./About.module.scss";
import { Section, Socials } from "../../../components/common";
import Colour from "../../../constants/Colour";
import { socialIcons } from "../../../constants/SocialIcons";

const About = () => {
    return (
        <Section colour={Colour.PRIMARY}>
            <h1>About</h1>
            <div className={style.socials}>
                <div className={style.icons}>
                    <Socials data={socialIcons} />
                </div>
            </div>
        </Section>
    );
};

export default About;
