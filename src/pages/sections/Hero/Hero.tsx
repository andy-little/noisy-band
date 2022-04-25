import React from "react";
import style from "./Hero.module.scss";
import { Section } from "../../../components/common";
import Colour from "../../../constants/Colour";

const Hero = () => {
    return (
        <Section colour={Colour.PRIMARY}>
            <div className={style.container}>
                <h1 className={style.white}>Funk - Soul - Jazz</h1>
            </div>
        </Section>
    );
};

export default Hero;
