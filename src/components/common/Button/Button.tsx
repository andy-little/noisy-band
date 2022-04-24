import React from "react";
import style from "./Button.module.scss";
export enum BtnClr {
    // css must use these class names
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
}

interface ButtonProps {
    children: React.ReactChild;
    colour?: BtnClr;
}
const Button: React.FC<ButtonProps> = ({ children, colour }) => {
    return (
        <button className={`${style.btn} ${colour && style[colour]}`}>
            {children}
        </button>
    );
};

export default Button;
