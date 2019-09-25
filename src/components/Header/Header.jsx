import React from 'react';
import imagelogo from './imagelogo.png';
import HeaderCss from './Header.module.css';

const Header = () => {
    return (
        <header className={HeaderCss.header}>
            <img src={imagelogo} alt="Картинка" height="150" />
            Header
        </header>
    );
}

export default Header;