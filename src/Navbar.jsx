// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import img from './Black White Elegant Monogram Initial Name Logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
            <Link to={'/'}> <img src={img} alt="" height='70px' width="150px" /></Link>
                <div className={`menu-icon ${isMobile ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-menu ${isMobile ? 'active' : ''}`}>
                    <li className="nav-item"><Link to={'/'}>Home</Link></li>
                    <li className="nav-item"><Link to={'/projects'}>Projects</Link></li>
                    <li className="nav-item"><Link to={'/about'}>About Us</Link></li>
                    <li className="nav-item"><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
