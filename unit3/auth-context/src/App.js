import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser({ name: '', email: '' });
    setIsLoggedIn(false);
  };

  const auth = { user, isLoggedIn, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      <div style={{ fontFamily: 'Arial', padding: '30px' }}>
        <h2>🔐 מערכת התחברות עם Context</h2>
        {!isLoggedIn ? <LoginForm /> : <Profile />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
