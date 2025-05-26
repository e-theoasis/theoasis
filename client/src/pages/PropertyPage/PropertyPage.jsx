import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import './PropertyPage.css';
import { properties } from '../../data/properties'; 
import community1 from '../../assets/images/left-1.jpg';
import community2 from '../../assets/images/left-2.jpg';
import community3 from '../../assets/images/right-1.jpg';
import community4 from '../../assets/images/right-2.jpg';
import community5 from '../../assets/images/right-3.jpg';

const PropertyPage =({slug}) => {

    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top on mount
    }, []);
    
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
                <div className="info-header">
                    <h4>{property.property_info_logline}</h4>
                    <h2>{property.property_info_title}</h2>
                    <p>{property.property_info_text}</p>
                </div>

                <div className="info-stats">
                    {property.property_info_stat1 && (
                        <div className="stat">
                            <img
                                src={property.property_icon_stat1}
                                alt="Stat 1 Icon"
                                className="stat-icon"
                            />
                            <div className="stat-text">{property.property_info_stat1}</div>
                        </div>
                    )}
                    {property.property_info_stat2 && (
                        <div className="stat">
                            <img
                                src={property.property_icon_stat2}
                                alt="Stat 2 Icon"
                                className="stat-icon"
                            />
                            <div className="stat-text">{property.property_info_stat2}</div>
                        </div>
                    )}
                    {property.property_info_stat3 && property.property_info_stat3.trim() !== '' && (
                        <div className="stat">
                            <img
                                src={property.property_icon_stat3}
                                alt="Stat 3 Icon"
                                className="stat-icon"
                            />
                            <div className="stat-text">{property.property_info_stat3}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="gallery-section">
                <div className="gallery-header">
                    <h2>GALLERY</h2>
                </div>

                {/* Gallery Block 1 */}
                <div className="gallery-block">
                    <h2>{property.property_gallery1_title}</h2>
                    <div className="image-slider">
                        {property.property_gallery1_images.map((img, index) => (
                            <img src={img} alt={`Gallery 1 - ${index + 1}`} key={index} />
                        ))}
                    </div>
                </div>

                {/* Gallery Block 2 */}
                <div className="gallery-block">
                    <h2>{property.property_gallery2_title}</h2>
                    <div className="image-slider">
                        {property.property_gallery2_images.map((img, index) => (
                            <img src={img} alt={`Gallery 2 - ${index + 1}`} key={index} />
                        ))}
                    </div>
                </div>
            </div>


            <div className="amenities-section">

                {/* Amenities header */}
                <div className="ameneties-header">
                    <h4>Life Designed for You</h4>
                    <h2>AMENITIES</h2>
                </div>

                {/* Amenities Grid */}
                <div className="amenities-grid">
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/beach.png" alt="beach"/>
                        <h4>Beaches</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/windows/100/tree.png" alt="tree"/>
                        <h4>Community Parks & Playgrounds</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/graduation-cap.png" alt="graduation-cap"/>
                        <h4>Schools</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/shopping-mall.png" alt="shopping-mall"/>
                        <h4>Retail Centres</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/dumbbell.png" alt="dumbbell"/>
                        <h4>Sport Courts & Fitness Facilities</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/swimming-pool.png" alt="swimming-pool"/>
                        <h4>Swimming Pools</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/crowd.png" alt="crowd"/>
                        <h4>Community Centre</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/guru.png" alt="guru"/>
                        <h4>Wellness & Spa Facilities</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/park-bench.png" alt="park-bench"/>
                        <h4>Pocket Parks</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/sea-waves.png" alt="sea-waves"/>
                        <h4>Swimmable Lagoon</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/cycling-road--v1.png" alt="cycling-road--v1"/>
                        <h4>Outdoor Tracks for Jogging & Cycling</h4>
                    </div>
                    <div className="amenity">
                        <img width="100" height="100" src="https://img.icons8.com/external-outline-juicy-fish/100/external-clubhouse-golfing-outline-outline-juicy-fish.png" alt="external-clubhouse-golfing-outline-outline-juicy-fish"/>
                        <h4>Clubhouse</h4>
                    </div>
                </div>
            </div>


            <div className="vr-section">

                {/* Background image */}
                <div className="vr-backdrop">
                    <div className="vr-overlay">
                        <div className="vr-content">
                            <p>Discover unparalleled luxury living at The Oasis by Emaar, an exclusive sanctuary nestled amidst lush greenery and tranquil waterways. Our meticulously crafted residences, including mansions and villas, are designed by world-renowned architects and adorned with interiors by acclaimed designers.</p>
                            <a href="https://properties.emaar.com/en/communities-vr-tour/?community=THE%20OASIS" target="_blank" rel="noopener noreferrer">
                                <button className='vr-button'>Explore VR Tour</button> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="community-section">

                <img src={community1} alt="Community View 1" className="community-1" />
                <img src={community2} alt="Community View 2" className="community-2" />

                {/* Center text block */}
                <div className="community-content">
                    <h4>Immerse in Pure Luxury</h4>
                    <h2>THE OASIS</h2>
                    <p>
                        Discover unparalleled luxury living at The Oasis by Emaar, an exclusive sanctuary nestled amidst lush greenery and tranquil waterways. Our meticulously crafted residences, including mansions and villas, are designed by world-renowned architects and adorned with interiors by acclaimed designers. Enjoy seamless indoor-outdoor living, complemented by an abundance of world-class amenities. Your journey to unparalleled sophistication begins now at Emaar's The Oasis. Welcome home to a lifestyle of effortless luxury and timeless charm.
                    </p>
                    <div className="icons">
                        <div className="icon">
                            <img width="100" height="100" src="https://img.icons8.com/ios/100/field.png" alt="field"/>     
                            <h4>100 million sq ft</h4>  
                            <h5>Total land Area</h5>     
                        </div>                
                        <div className="icon">
                            <img width="100" height="100" src="https://img.icons8.com/dotty/80/cottage.png" alt="cottage"/>
                            <h4>3100</h4>
                            <h5>Villas</h5>
                        </div>
                        <div className="icon">
                            <img width="100" height="100" src="https://img.icons8.com/ios/100/golf.png" alt="golf"/>
                            <h4>4 Intl. Golf Courses</h4>
                            <h5>Open Spaces + Amenities</h5>
                        </div>
                        <div className="icon">
                            <img width="100" height="100" src="https://img.icons8.com/dotty/100/building.png" alt="building"/>
                            <h4>25% of the Land</h4>
                            <h5>In Close Proximity</h5>
                        </div>
                    </div>
                    <a href="https://properties.emaar.com/en/our-communities/the-oasis/" target="_blank" rel="noopener noreferrer">
                        <button className='community-button'>View Community</button> 
                    </a>
                </div>

                <img src={community3} alt="Community View 3" className="community-3" />
                <img src={community4} alt="Community View 4" className="community-4" />
                <img src={community5} alt="Community View 5" className="community-5" />
            </div>

        </div>
    );
};

export default PropertyPage;