import { Socials } from '../../../components/common';
import { socialAndContactIcons } from '../../../constants/SocialIcons';
import style from './Footer.module.scss';
import logo from '../../../static/logo-sm.png';

const Footer = () => {
  return (
    <div className={`${style.footer}`}>
      <div className={style.copyright}>
        <p>Copyright © 2022 Andy Little</p>
        <p>All Rights Reserved</p>
      </div>
      <img className={style.logo} src={logo} alt="noisy band logo" />
      <div className={style.socials}>
        <Socials data={socialAndContactIcons} />
      </div>
    </div>
  );
};

export default Footer;
