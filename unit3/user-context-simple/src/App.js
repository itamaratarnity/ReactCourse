
import './App.css';

import React, { useState } from 'react';
import { UserContext } from './context/UserContext';
import UserInput from './components/UserInput';
import Greeting from './components/Greeting';

function App() {
  const [user, setUser] = useState({ name: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ fontFamily: 'Arial', padding: '30px' }}>
        <h2>🧠 שיתוף מידע עם Context ו־State</h2>
        <UserInput />
        <Greeting />
      </div>
    </UserContext.Provider>
  );
}

export default App;
