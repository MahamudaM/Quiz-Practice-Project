import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <nav className='navbar-wrapper'>
            <div className='nab-logo'>
            <h1 className='logoTex'>Quiz world </h1>
                </div>
            <div className="navLink">
            <NavLink  to='/'>Home</NavLink>
            
            <NavLink to = '/quizChart'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/route'>4o4Route</NavLink>
            </div>
        </nav>
        </div>
    );
};

export default Header;