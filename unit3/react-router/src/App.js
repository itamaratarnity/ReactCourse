// 📁 App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';

// This code defines a simple React application using React Router for navigation.
// It includes three main pages: Home, About, and Contact, each represented by a separate component.
// The `App` component sets up the router and defines the navigation links using the `Link` component from `react-router-dom`.
// The `Routes` component is used to define the different routes in the application, mapping each path to its corresponding component.
// The navigation links are styled with inline CSS for basic layout and appearance.
// The application uses icons to visually represent each page, enhancing user experience and making it easier to identify the purpose of each link.
// The `Router` component wraps the entire    application, enabling the use of routing features provided by React Router.   
// The `BrowserRouter` is used to handle the routing in a web browser environment, allowing for clean URLs and navigation without page reloads.


function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial' }}>
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '15px' }}>🏠 Home</Link>
          <Link to="/about" style={{ marginRight: '15px' }}>ℹ️ About</Link>
          <Link to="/contact">✉️ Contact</Link>
          <Link to="/user/101">🔗 משתמש 101</Link>
          <Link to="/user/202">🔗 משתמש 202</Link>

        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
