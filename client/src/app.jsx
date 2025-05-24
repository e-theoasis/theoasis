import { useState } from 'preact/hooks';
import Router from 'preact-router';
import ContactForm from './components/ContactForm/ContactForm';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Homepage/HomePage';
import PropertyPage from './pages/PropertyPage/PropertyPage'; // import this

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">      
      <Router>
        <HomePage path="/" />
        <PropertyPage path="/property/:slug" />
      </Router>
      <ContactForm />
    </div>
  );
}
