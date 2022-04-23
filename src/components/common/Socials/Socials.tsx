import React from "react";
import { SocialData } from "../../../constants/SocialIcons";

interface SocialsProps {
    data: SocialData[];
}

const Socials: React.FC<SocialsProps> = ({ data }) => {
    return (
        <div className="social-icons">
            {data.map(({ icon, url, description, id }) => {
                return (
                    <a
                        key={id}
                        className="social-icons-single"
                        href={url}
                        aria-label={description}
                    >
                        {icon}
                    </a>
                );
            })}
        </div>
    );
};

export default Socials;
