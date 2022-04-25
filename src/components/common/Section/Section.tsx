import React from "react";
interface SectionProps {
    children: React.ReactNode;
    colour: 
}
const Section: React.FC<SectionProps> = ({ children }) => {
    return <article>{children}</article>;
};

export default Section;
