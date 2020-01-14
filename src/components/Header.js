import React from 'react';
import logoHeader from '../stylesheet/images/logoHeader.png';
import icon from '../stylesheet/images/rick-morty-season-4-release-date.png';

const Header = () => <div className="header"> <img className="head" src={icon} alt="icon head morty" /> <img className="header__img" src={logoHeader} alt="logo web" /></div>;

export default Header;
