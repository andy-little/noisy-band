import React from "react";
import style from "./Button.module.scss";
import { BtnOpts } from "./Button";

export interface LinkBtnProps {
    children: React.ReactChild;
    options?: BtnOpts;
    url: string;
}
const LinkBtn: React.FC<LinkBtnProps> = ({ children, options, url }) => {
    return (
        <a
            href={url}
            className={`${style.btn} ${
                options?.colour && style[options?.colour]
            }`}
            aria-label={options?.label ? options.label : ""}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
};

export default LinkBtn;
