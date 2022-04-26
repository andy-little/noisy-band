import React from "react";
import style from "./Button.module.scss";
import { BtnOpts } from "./Button";

export interface LinkBtnProps {
    children: React.ReactChild;
    options?: BtnOpts;
    url: string;
    className?: string;
}
const LinkBtn: React.FC<LinkBtnProps> = ({
    children,
    options,
    url,
    className,
}) => {
    return (
        <a
            href={url}
            className={`${style.btn} ${
                options?.colour && style[options?.colour]
            } ${className}`}
            aria-label={options?.label ? options.label : ""}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
};

export default LinkBtn;
