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
                {/* landing section slideshow */}
                <div className="container">
                    <div className="slider-wrapper">
                        <div className="slider">
                            {property.property_landing_images.map((ingSrc, index) => (
                                <img src={imgSrc} 
                                alt={`Property image ${index+1}`} 
                                key={index}
                                id={`slide-${index+1}`}/>
                            ))}
                        </div>
                        <div className="slider-nav">
                            {property.property_landing_images.map((_, index) => (
                                <a href={`#slide-${index + 1}`}></a>
                            ))}
                        </div>
                    </div>
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