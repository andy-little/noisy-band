import React from "react";
import { Section, Quote } from "../../../components/common";
import Colour from "../../../constants/Colour";
import style from "./EP.module.scss";
import ep from "../../../static/images/ep.jpg";

const EP = () => {
    return (
        <Section>
            <div className="section-padding">
                <h1 className={style.h1}>Darker Than Blue</h1>
                <h2>New EP Coming Soon!</h2>
                <img
                    className={style.album}
                    src={ep}
                    alt="darker than blue EP cover"
                />
                <Quote author="shades of soul LTD" colour={Colour.OFF_WHITE}>
                    Don't miss this amazing array of talent.
                </Quote>
            </div>
        </Section>
    );
};

export default EP;
