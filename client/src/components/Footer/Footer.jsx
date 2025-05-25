import { Link } from 'preact-router';
import { useEffect } from 'preact/hooks';
import './Footer.css';
import { properties } from '../../data/properties';
import icon1 from '../../../public/home-images/Facebook.png';
import icon2 from '../../../public/home-images/X.png';
import icon3 from '../../../public/home-images/YouTube.png';
import icon4 from '../../../public/home-images/Instagram.png';
import icon5 from '../../../public/home-images/LinkedIn.png';

const Footer =() => {
    
    return (
        <div className="footer-body">
                <footer>
                    <div className='one'>
                        <h1>EMAAR</h1>
                        <ul class="socials">
                            <li><img src={icon1} alt=""/></li>
                            <li><img src={icon2} alt=""/></li>
                            <li><img src={icon3} alt=""/></li>
                            <li><img src={icon4} alt=""/></li>
                            <li><img src={icon5} alt=""/></li>
                        </ul>
                        <div className='three'>
                            <h5>Contact Us</h5>
                            <form action="">
                                <input type="email" placeholder="Enter Email" required/>
                                <button>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>

                    <div className='two'>
                        <h4>The Oasis</h4>
                        <ul class="links">
                            {Object.entries(properties).map(([id, property]) => (
                            <li key={id}>
                                <Link href={`/property/${property.slug}`}>
                                {property.property_title}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </footer>
                <div className="copyright">
                    Copyright 2025 | Privacy Policy
                </div>
        </div>
    );
};

export default Footer;