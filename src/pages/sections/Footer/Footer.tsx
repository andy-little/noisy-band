import { Socials } from "../../../components/common";
import { socialAndContactIcons } from "../../../constants/SocialIcons";
import style from "./Footer.module.scss";
import logo from "../../../static/logo.png";

const Footer = () => {
    return (
        <div className={` ${style.footer}`}>
            <div className={style.copyright}>
                <p>Copyright © 2022 Andy Little</p>
                <p>All Rights Reserved</p>
                <p> Site By Andy Little</p>
            </div>
            <img className={style.logo} src={logo} alt="noisy band logo" />
            <div className={style.socials}>
                <Socials data={socialAndContactIcons} />
            </div>
        </div>
    );
};

export default Footer;
