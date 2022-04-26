import { Socials } from "../../../components/common";
import { socialAndContactIcons } from "../../../constants/SocialIcons";
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={`section-padding ${style.footer}`}>
            <div className={style.copyright}>
                <p>Copyright © 2022 Andy Little</p>
                <p>All Rights Reserved</p>
                <p> Site By Andy Little</p>
            </div>
            <div className={style.socials}>
                <Socials data={socialAndContactIcons} />
            </div>
        </div>
    );
};

export default Footer;
