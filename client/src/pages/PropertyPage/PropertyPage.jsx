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
                            {property.property_landing_images.map((imgSrc, index) => (
                                <img src={imgSrc} 
                                alt={`Property image ${index+1}`} 
                                key={index}
                                id={`slide-${index+1}`}/>
                            ))}
                        </div>
                        <div className="slider-nav">
                            {property.property_landing_images.map((_, index) => (
                                <a
                                key={index}
                                href={`#`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const slide = document.getElementById(`slide-${index + 1}`);
                                    if (slide) {
                                    slide.scrollIntoView({ behavior: 'smooth', inline: 'start' });
                                    }
                                }}></a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-property">
                
            </div>
            <div className="intro-section">
                <div className="intro-text">
                    <h3>{property.property_logline}</h3>
                    <p>{property.property_intro}</p>
                </div>
                <div className="intro-image">
                    <img src={property.property_logo} alt="Property Logo" />
                    <button>Register Interest</button>
                </div>
            </div>

            <div className="about-section">
                <div className="right">
                    <h3>{property.property_about1_title}</h3>
                    <p>{property.property_about1_text}</p>
                    <img src={property.property_about1_image} alt="" />
                </div>
                <div className="left">
                    <h3>{property.property_about2_title}</h3>
                    <p>{property.property_about2_text}</p>
                    <img src={property.property_about2_image} alt="" />
                </div>
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