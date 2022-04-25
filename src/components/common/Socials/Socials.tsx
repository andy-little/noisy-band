import React from "react";
import { SocialData } from "../../../constants/SocialIcons";

interface SocialsProps {
    data: SocialData[];
}

const Socials: React.FC<SocialsProps> = ({ data }) => {
    return (
        <>
            {data.map(({ icon, url, description, id }) => {
                return (
                    <a
                        key={id}
                        className="social-icon"
                        href={url}
                        aria-label={description}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {icon}
                    </a>
                );
            })}
        </>
    );
};

export default Socials;
