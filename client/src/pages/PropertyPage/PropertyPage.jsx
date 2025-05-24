import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import './PropertyPage.css';
import { properties } from '../../data/properties';

const PropertyPage =({slug}) => {

    const property = Object.values(properties).find (
        (p) => p.slug === slug
    );

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