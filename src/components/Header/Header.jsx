import React from 'react';
import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {

    const setActiveClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

    return (
        <nav className={css.nav}>
            <NavLink className={setActiveClass} to='/' >Home</NavLink>
            <NavLink className={setActiveClass} to='/movies' >Movies</NavLink>
        </nav>
    )
}
export default Header;
