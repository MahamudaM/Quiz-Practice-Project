import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <nav className='navbar-wrapper'>
            <div className='nab-logo'>
            <h1>Quiz world </h1>
                </div>
            <div className="navLink">
            <Link to='/'>Home</Link>
            <Link to = '/quizChart'>QuizChart</Link>
            <Link to='/blog'>Blog</Link>
            </div>
        </nav>
        </div>
    );
};

export default Header;