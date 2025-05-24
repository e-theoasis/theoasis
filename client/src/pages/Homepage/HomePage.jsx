import { Link } from 'preact-router'; //
import { properties } from '../../data/properties';
import './HomePage.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const HomePage = () => {
  return (
    <div className="home-body">
      <div className="property-section">
        {Object.entries(properties).map(([id, property]) => (
          <Link href={`/property/${property.slug}`} key={id} className="property-link">
            {property.property_title}
          </Link>
        ))}
      </div>

      <ContactForm />
    </div>
  );
};

export default HomePage;