import React from "react";
import style from "./UnderConstruction.module.scss";
import { LinkBtn } from "../../components/common";
import Colour from "../../constants/Colour";

const UnderConstruction = () => {
    return (
        <div className="page">
            <h1>Page Unavailable</h1>
            <p>
                This page is currently under construction. Please check back
                again soon!
            </p>
            <LinkBtn options={{ colour: Colour.PRIMARY }} url="/">
                Home
            </LinkBtn>
        </div>
    );
};

export default UnderConstruction;
