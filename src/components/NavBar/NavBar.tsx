import React from "react";
import style from "./NavBar.module.scss";
import { navItems } from "../../constants/nav";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav_container}>
            <div className={style.nav_items}>
                {navItems.map(({ url, name, id }) => {
                    return (
                        <Link className={style.link} to={url} key={id}>
                            {name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default NavBar;
