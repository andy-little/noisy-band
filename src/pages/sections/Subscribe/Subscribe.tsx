import React from "react";
import { Section } from "../../../components/common";
import Colour from "../../../constants/Colour";
import style from "./Subscribe.module.scss";
import banner from "../../../static/images/banner.jpg";

const Subscribe = () => {
    return (
        <Section colour={Colour.PRIMARY}>
            <div className={`section-padding ${style.content}`}>
                <h1>Subscribe</h1>
            </div>
            <img
                className={style.banner}
                src={banner}
                alt="mr little's noisy band banner"
            />
        </Section>
    );
};

export default Subscribe;
