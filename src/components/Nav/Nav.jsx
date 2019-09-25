import React from 'react';
import NavCss from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={NavCss.nav}>
            <NavLink to='/main' activeClassName={NavCss.active}>Profile</NavLink>
            <br></br>
            <NavLink to='/dialogs' activeClassName={NavCss.active}>Dialogs</NavLink>
            <br></br>
            <NavLink to="#">Music</NavLink>
            <br></br>
            <NavLink to="#">Settings</NavLink>
            <br></br>
            HiperNav
        </nav>
    );
}

export default Nav;