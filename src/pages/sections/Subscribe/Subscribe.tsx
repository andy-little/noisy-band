import React from "react";
import { Section } from "../../../components/common";
import Colour from "../../../constants/Colour";
import style from "./Subscribe.module.scss";
import banner from "../../../static/images/banner.jpg";
import { SubscribeForm } from "../../../components";

const Subscribe = () => {
    return (
        <Section colour={Colour.TERTIARY}>
            <div className={`section-padding ${style.content}`}>
                <h1>Mailing List</h1>
                <SubscribeForm />
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
