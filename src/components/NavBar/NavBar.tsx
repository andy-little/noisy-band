import React from 'react';
import style from './NavBar.module.scss';
import { navItems } from '../../constants/nav';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RiMenu5Fill } from 'react-icons/ri';
import Location from '../../constants/Location';

// interface NavBarProps {
//   cb: (value: Location) => void;
// }

const NavBar: React.FC /* <NavBarProps> */ = (/* { cb } */) => {
  return (
    <nav className={style.nav_container}>
      <div className={`${style.clip}`}>
        <RiMenu5Fill className={style.hamburger} />
        <div className={style.nav_items}>
          {navItems.map(({ url, name, id, location }) => {
            const hasID = location !== Location.TOP;
            const Component = hasID ? HashLink : Link;

            return (
              <Component
                className={style.link}
                to={url}
                key={id}
                // onClick={() => cb(location)
              >
                {name}
              </Component>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
