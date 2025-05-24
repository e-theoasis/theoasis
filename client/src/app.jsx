import { useState } from 'preact/hooks';
import Router from 'preact-router';
import ContactForm from './components/ContactForm/ContactForm';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <ContactForm path="/" />
      </Router>
    </div>
  );
}
