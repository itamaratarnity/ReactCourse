import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import ThankYou from './pages/ThankYou';

// This is the main App component that sets up the React Router.
// It includes a navigation link to the contact form and routes to handle form submission and thank you page.
// The contact form allows users to submit their name and email, and upon submission,
// it navigates to a thank you page that confirms the submission.     

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial' }}>
        <nav>
          <Link to="/contact">✉️ צור קשר</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<h1>ברוכים הבאים לאתר שלנו!</h1>} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
