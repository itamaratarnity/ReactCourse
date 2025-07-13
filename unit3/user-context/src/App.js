import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// This is the main App component of a React application that uses React Router for navigation.
// It provides a user context for managing user state across the application.
// The component includes a navigation bar with links to the login page and the dashboard.
// The App component uses the UserContext to provide user state and a function to update it.
// It renders the Login component at the root path and the Dashboard component at the /dashboard path
// The navigation bar is styled with padding and a light background color for better visibility.
// The component is structured to be easily maintainable and extendable, allowing for future enhancements.
// The component is designed to be responsive and work well across different devices, ensuring a consistent user
// experience regardless of the platform.
// The component is part of a user authentication flow, allowing users to securely log in and access
// the dashboard after logging in.    
function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <nav style={{ padding: '10px', background: '#eee' }}>
          <Link to="/" style={{ marginRight: 10 }}>🏠 Login</Link>
          <Link to="/dashboard">📊 Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

