import React from "react";
import Colour from "../../../constants/Colour";
import style from "./Section.module.scss";

interface SectionProps {
    children: React.ReactNode;
    colour?: Colour;
    className?: string;
}
const Section: React.FC<SectionProps> = ({ children, colour, className }) => {
    return (
        <article
            className={`${style.section} ${
                colour && style[colour]
            } ${className}`}
        >
            {children}
        </article>
    );
};

export default Section;
