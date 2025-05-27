import React from 'react';
import './PropertyNavbar.css';
import { Link } from 'preact-router';

const PropertyNavbar =() => {
    return (
        <div className="navbar-body">
            <header>
                <Link href="/" className="logo">
                    <h1 id="logo">EMAAR</h1>
                </Link>
                <nav>
                    <ul id="navbar">
                        <li><a href="#about-property">ABOUT</a></li>
                        <li><a href="#property-gallery">GALLERY</a></li>
                        <li><a href="#vr-tour">VR TOUR</a></li>
                        <li><a href="#property-community">COMMUNITY</a></li>
                    </ul>
                </nav>
                <button><a href="#contactform">GET IN TOUCH</a></button>
            </header>

        </div>
    );
};

export default PropertyNavbar;