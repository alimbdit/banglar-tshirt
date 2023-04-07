import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav class='menu'>
            <Link to='/'>Home</Link>
            <Link to='/order'>Order Review</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/fqa'>FQA</Link>
        </nav>
    );
};

export default Header;