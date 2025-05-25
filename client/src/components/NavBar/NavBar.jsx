import React from 'react';
import './NavBar.css';

const NavBar =() => {
    return (
        <div className="navbar-body">
            <header>
                <h1 id="logo"><a href="#home-body">EMAAR</a></h1>
                <nav>
                    <ul id="navbar">
                        <li><a href="#intro">ABOUT US</a></li>
                        <li><a href="#properties">PROPERTIES</a></li>
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