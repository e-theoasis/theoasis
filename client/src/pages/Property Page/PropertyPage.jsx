import React from 'react';
import './PropertyPage.css';
import { properties } from '../../data/property';

const PropertyPage =() => {

    const property = properties[1]

    return (
        <div className="property-body">

            {/* heading + slider */}
            <div className="landing-section">
                {/* heading */}
                <div className="property-name">
                    <h1>{property.property_title}</h1>
                </div>
            </div>

            <div className="intro-section">
            </div>

            <div className="about-section">
            </div>

            <div className="info-section">
            </div>

            <div className="gallery-section">
            </div>

            <div className="amenities-section">

            </div>

            <div className="map-section">
            </div>

            <div className="community-section">

            </div>
        </div>
    );
};

export default PropertyPage;