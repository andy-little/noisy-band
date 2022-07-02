import React, { useState } from 'react';
import style from './NavBar.module.scss';
import { navItems } from '../../constants/nav';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RiMenu5Fill } from 'react-icons/ri';
import Location from '../../constants/Location';

const NavBarItems: React.FC = () => {
  return (
    <>
      {navItems.map(({ url, name, id, location }) => {
        const hasID = location !== Location.TOP;
        const Component = hasID ? HashLink : Link;
        return (
          <Component className={style.link} to={url} key={id}>
            {name}
          </Component>
        );
      })}
    </>
  );
};

const NavBar: React.FC = () => {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  return (
    <nav className={style.nav_container}>
      <div className={`${style.clip}`}>
        <RiMenu5Fill
          className={style.hamburger}
          onClick={() => setIsMobNavOpen(!isMobNavOpen)}
        />
        <div className={style.mob_nav}>{isMobNavOpen && <NavBarItems />}</div>
        <div className={style.nav_items}>
          <NavBarItems />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
