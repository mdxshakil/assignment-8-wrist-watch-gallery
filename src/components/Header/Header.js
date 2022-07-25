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
                <a href="">About</a>
                <a href="">Orders</a>
                <a href="">Inventory</a>
                <a href="">Services</a>
            </div>
        </div>
    );
};

export default Header;