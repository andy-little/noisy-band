import React from "react";
import style from "./Button.module.scss";
export enum BtnClr {
    // css must use these class names
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
}
export interface BtnOpts {
    colour?: BtnClr;
    label?: string;
}
interface ButtonProps {
    children: React.ReactChild;
    options?: BtnOpts;
    cb: Function;
}
const Button: React.FC<ButtonProps> = ({ children, options, cb }) => {
    return (
        <button
            className={`${style.btn} ${
                options?.colour && style[options.colour]
            }`}
            aria-label={options?.label ? options.label : ""}
            onClick={() => cb()}
        >
            {children}
        </button>
    );
};

export default Button;
