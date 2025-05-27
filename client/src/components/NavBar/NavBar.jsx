import React from 'react';
import './NavBar.css';
import { Link } from 'preact-router';

const NavBar =() => {
    return (
        <div className="navbar-body">
            <header>
                <Link href="/" className="logo">
                    <h1 id="logo">EMAAR</h1>
                </Link>
                <nav>
                    <ul id="navbar">
                        <li><a href="#intro">ABOUT US</a></li>
                        <li><a href="#properties">LATEST PROPERTIES</a></li>
                        <li><a href="#communities">COMMUNITIES</a></li>
                        <li><a href="#location">LOCATION</a></li>
                    </ul>
                </nav>
                <button><a href="#contactform">GET IN TOUCH</a></button>
            </header>

        </div>
    );
};

export default NavBar;