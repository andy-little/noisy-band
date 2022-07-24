import React, { useState } from 'react';
import style from './NavBar.module.scss';
import { navItems } from '../../constants/nav';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RiMenu5Fill } from 'react-icons/ri';
import Location from '../../constants/Location';

interface NavBarItemsProps {
  cb?: () => void;
  offset?: number;
}

const NavBarItems: React.FC<NavBarItemsProps> = ({ cb, offset = 0 }) => {
  return (
    <>
      {navItems.map(({ url, name, id, location }) => {
        if (location !== Location.NONE) {
          const hasID = location !== Location.TOP;
          const Component = hasID ? HashLink : Link;

          return (
            <Component
              className={style.link}
              to={url}
              key={id}
              onClick={cb ? () => cb() : () => {}}
              scroll={(el) => {
                if (offset) {
                  el.scrollIntoView();
                  window.scrollBy(0, offset);
                }
              }}
            >
              {name}
            </Component>
          );
        } else {
          return (
            <a className={style.link} href={url}>
              {name}
            </a>
          );
        }
      })}
    </>
  );
};

const NavBar: React.FC = () => {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);
  const toggleMobNav = () => {
    setIsMobNavOpen(!isMobNavOpen);
  };

  return (
    <nav className={style.nav_container}>
      <div className={`${style.clip}`}>
        <RiMenu5Fill className={style.hamburger} onClick={toggleMobNav} />
        <div className={style.mob_nav}>
          {isMobNavOpen && <NavBarItems cb={toggleMobNav} offset={-80} />}
        </div>
        <div className={style.nav_items}>
          <NavBarItems offset={-84} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
