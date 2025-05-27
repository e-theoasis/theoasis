import { useState } from 'preact/hooks';
import { Router } from 'preact-router';
import HomePage from './pages/Homepage/HomePage';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import NavBar from './components/NavBar/NavBar'; 
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import './app.css';

export function App() {
  const [count, setCount] = useState(0);
  const [currentPath, setCurrentPath] = useState('/');

  return (
    <div className="App" id='complete'>  
        <Router onChange={({url}) => setCurrentPath(url)}>
          <HomePage path="/" />
          <PropertyPage path="/property/:slug" />
        </Router>
        <ContactForm />
        <Footer />
        <ScrollToTop path={currentPath}/>
    </div>
  );
}
