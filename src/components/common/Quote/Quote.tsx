import React from "react";
import style from "./Quote.module.scss";
import Colour from "../../../constants/Colour";
import { FaQuoteLeft } from "react-icons/fa";

interface QuoteProps {
    children: string;
    author: string;
    colour?: Colour;
    className?: string;
}

const Quote: React.FC<QuoteProps> = ({
    children,
    author,
    colour,
    className,
}) => {
    return (
        <div className={style.container}>
            <span
                className={`${style.icon} ${
                    colour && style[colour]
                } ${className}`}
            >
                <FaQuoteLeft />
            </span>
            <p className={style.quote}>{children}</p>
            <p className={style.author}> - {author}</p>
        </div>
    );
};

export default Quote;
