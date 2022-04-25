import logo from "../../../static/images/Logo.png";
import style from "./Hero.module.scss";
import { Section } from "../../../components/common";
import Colour from "../../../constants/Colour";

const Hero = () => {
    return (
        <Section colour={Colour.PRIMARY}>
            <div className={style.container}>
                <img className={style.logo} src={logo} alt="noisy band logo" />
                <h1 className={style.title}>Funk - Soul - Jazz</h1>
            </div>
        </Section>
    );
};

export default Hero;
