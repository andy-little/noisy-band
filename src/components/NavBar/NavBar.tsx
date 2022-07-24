import React, { useState } from 'react';
import style from './NavBar.module.scss';
import { navItems } from '../../constants/nav';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RiMenu5Fill } from 'react-icons/ri';
import Location from '../../constants/Location';

interface NavBarItemsProps {
  cb?: () => void;
  offset?: boolean;
}

const NavBarItems: React.FC<NavBarItemsProps> = ({ cb, offset = false }) => {
  return (
    <>
      {navItems.map(({ url, name, id, location }) => {
        const hasID = location !== Location.TOP;
        const Component = hasID ? HashLink : Link;

        return (
          <Component
            data-type={JSON.stringify(Component, null, 2)}
            className={style.link}
            to={url}
            key={id}
            onClick={cb ? () => cb() : () => {}}
            scroll={(el) => {
              if (offset) {
                el.scrollIntoView();
                window.scrollBy(0, -80);
              } else {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {name}
          </Component>
        );
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
          {isMobNavOpen && <NavBarItems cb={toggleMobNav} offset={true} />}
        </div>
        <div className={style.nav_items}>
          <NavBarItems />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
