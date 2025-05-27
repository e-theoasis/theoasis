import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';

import { useEffect, useRef } from 'react';
import { Link } from 'preact-router'; //
import { properties } from '../../data/properties';
import { FAQs } from '../../data/faqs';
import { useState } from 'preact/hooks';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import oasisLogo from '../../../public/home-images/oasis-logo.jpeg';
import amenity1 from '../../../public/home-images/area.png';
import amenity2 from '../../../public/home-images/villas.png';
import amenity3 from '../../../public/home-images/spaces.png';
import amenity4 from '../../../public/home-images/golf.png';
import community1 from '../../../public/home-images/arabiaRanches.jpg';
import community2 from '../../../public/home-images/arabianRanches3.jpg';
import community3 from '../../../public/home-images/marina.jpg';
import community4 from '../../../public/home-images/hillsEstate.jpeg';
import location from '../../../public/home-images/location.jpg';


const HomePage = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => { 
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  };

  const swiperWrappedRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;
    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft = screenWidth <= 520
      ? "0px" 
      : screenWidth <= 650
      ? "-50px"
      : screenWidth <=800
      ? "-100px"
      : "-150px";
    }
  }

  useEffect (() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin)
  }, []);

  return (
    <div className="home-body">
      <NavBar />

      {/* introductory section */}
        <section id="landing">
          <img src={oasisLogo} alt="The Oasis" />
        </section>

        <section id='intro'>
            {/* About Us */}
          <section id="aboutUs"> 
              <p>
                  Enjoy seamless indoor-outdoor living, complemented by an abundance of world-class amenities. The Oasis by Emaar is
                  more than just refined waterfront living; it’s the epitome of elegance and comfort, with every moment a celebration of life.
                  Enjoy the luxury of personalised services that cater to your every need, making every day an occasion for indulgence and
                  relaxation. Unwind in style amidst meticulously crafted interiors that inspire and invigorate. Your journey to unparalleled
                  sophistication begins now at Emaar’s The Oasis. Welcome home to a lifestyle of effortless luxury and timeless charm.
              </p>
              <button className="btn"><a href="#contactform">REGISTER INTEREST</a></button>
          </section>
          {/* Amenities section */}
          <section id="amenities">  
              <h2>AMENITIES</h2>
              <div id="units">
                  <div className="unit">
                      <img src={amenity1} alt=""/>
                      <h4>100 million sq ft</h4>
                      <p>Total Land Area</p>
                  </div>

                  <div className="unit">
                      <img src={amenity2} alt=""/>
                      <h4>3100</h4>
                      <p>Villas</p>
                  </div>

                  <div className="unit">
                      <img src={amenity3} alt=""/>
                      <h4>25% of the Land</h4>
                      <p>Open Spaces + Amenities</p>
                  </div>

                  <div className="unit">
                      <img src={amenity4} alt=""/>
                      <h4>4 International Golf Courses</h4>
                      <p>In Close Proximity</p>
                  </div>
              </div>
          </section>
        </section>
        
      {/* Property Section */}
        <section id="properties">
          <div className="property-title">
            <h2>LATEST LAUNCHES</h2>
          </div>
          <div className="container">
            <Swiper 
            modules = {[ Pagination ]}
            grabCursor
            initialSlide={0}
            centeredSlides
            slidesPerView="auto"
            speed={800}
            slideToClickedSlide
            pagination = {{ clickable: true }}
            breakpoints={{
              320 : {spaceBetween: 40},
              650 : {spaceBetween: 30},
              1000 : { spaceBetween : 20},
            }}
            onSwiper={(swiper) => {
              swiperWrappedRef.current = swiper.wrapperEl;
            }}
            >
                {Object.entries(properties).map (([id, property], index) => (
                    <SwiperSlide key={id}>
                      <img src={property.property_landing_images[0]} alt={property.property_title} />
                        <div className="title">
                          <h2>{property.property_title}</h2>
                          <Link href={`/property/${property.slug}`} key={id} className="property-link"><p className='learn-more'>Learn More →</p></Link>
                        </div>
                        <div className="content">
                          <div className="text-box">
                            <i class="fa fa-bed"></i> 
                            <p>{property.property_beds}</p>
                          </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>

      {/* Nearby Communities Section */}
        <section id="communities">
        <h2>NEARBY COMMUNITIES</h2>
        <div id="community">
            <div class="singleCommunity">
                <h3>ARABIAN RANCHES</h3>
                <img src={community1} alt=""/>
                <h5>JOURNEY BEYOND THE ORDINARY</h5>
                <p>3 & 4 Bedroom Villas & Townhouses</p>
            </div>

            <div class="singleCommunity">
                <h3>ARABIAN RANCHES III</h3>
                <img src={community2} alt=""/>
                <h5>FIND YOUR HAPPY PLACE</h5>
                <p>3-4 bedrooms Villas & Townhouses</p>
            </div>

            <div class="singleCommunity">
                <h3>DUBAI MARINA</h3>
                <img src={community3} alt=""/>            
                <h5>A PIONEERING WATERFRONT PROJECT</h5>
                <p>1-3 bedrooms Apartments</p>
            </div>

            <div class="singleCommunity">
                <h3>DUBAI HILLS ESTATE</h3>
                <img src={community4} alt=""/>
                <h5>THE GREEN HEART OF DUBAI</h5>
                <p>3 to 6 Bedroom Apartments, Villas & Townhouses</p>
            </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location">
        <h2>LOCATION</h2>
        <img src={location} alt=""/>
        <section id="steps">
                <div className='stat border'>
                    <h5>18</h5>
                    <p>Minutes to Al Maktoum International Airport</p>
                </div>
                <div className='stat border'>
                    <h5>20</h5>
                    <p>Minutes to Dubai Hills Estate, Dubai Hills Mall & Dubai Hills Golf Course</p>
                </div>
                <div className='stat border'>
                    <h5>28</h5>
                    <p>Minutes to Dubai Marina & Dubai Marina Mall</p>
                </div>
                <div className='stat'>
                    <h5>35</h5>
                    <p>Minutes to Downtown Dubai & Dubai Mall</p>
                </div>
            </section>
      </section>

      {/* VR Explore Section */}
      
      <section id="explore" className="vr-section">

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
      </section>

      {/* FAQ section */}
      <section id="faqs">
        <div className="faqtitle">
          <h2>FAQ</h2>
        </div>
        <div className="wrapper">
          <div className="accordian">
            {FAQs.map ((item, i) => (
                <div className="item" key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h3>{item.question}</h3>
                    <span>
                      {selected === i ? '-' : '+'}
                    </span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;