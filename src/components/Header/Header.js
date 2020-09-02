import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <img
                className="logo"
                alt="logo"
                src='https://i.pinimg.com/originals/13/30/ba/1330ba39ac54aa1c67c7f6f12db4af20.png' />
            <div className="loginBlock">
                <NavLink to={'./login'}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;