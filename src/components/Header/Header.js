import logo from '../../logo.png';
import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-image-container'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-links-container'>
                <a href="/about">About</a>
                <a href="/orders">Orders</a>
                <a href="/inventiry">Inventory</a>
                <a href="/services">Services</a>
            </div>
        </div>
    );
};

export default Header;