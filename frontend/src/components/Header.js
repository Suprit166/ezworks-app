import React from 'react';
import logo from '../Assets/EZ Works Blue@2x.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src={logo} alt="EZ Works" className="logo" />
    <h1 className="main-heading">Suite Of Business Support Services</h1>
    <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
  </header>
);

export default Header;
