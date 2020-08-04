import React from 'react';
import style from'./NavMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return(
        <nav className={style.navMenu}>
            <NavLink
                to="/profile"
                className={style.item}
                activeClassName={style.active}>
                    Profile
            </NavLink>
            <NavLink
                to="/dialogs"
                className={style.item}
                activeClassName={style.active}>
                    Messages
            </NavLink>
            <NavLink
                to="/news"
                className={style.item}
                activeClassName={style.active}>
                News
                </NavLink>
            <NavLink
                to="/music"
                className={style.item}
                activeClassName={style.active}>
                    Music
            </NavLink>
            <NavLink
                to="/settings"
                className={style.item}
                activeClassName={style.active}>
                    Setting
            </NavLink>
        </nav>
    )
}

export default NavMenu;