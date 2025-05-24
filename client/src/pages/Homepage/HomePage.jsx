import React from 'react';
import './HomePage.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const HomePage =() => {
    return (
        <div className="home-body">
            <ContactForm />
        </div>
    );
};

export default HomePage;