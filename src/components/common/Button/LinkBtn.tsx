import React from "react";
import style from "./Button.module.scss";
import { BtnClr } from "./Button";

interface LinkBtnProps {
    children: React.ReactChild;
    colour?: BtnClr;
    url: string;
}
const LinkBtn: React.FC<LinkBtnProps> = ({ children, colour, url }) => {
    return (
        <a
            href={url}
            className={`${style.btn} ${colour && style[colour]}`}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
};

export default LinkBtn;
