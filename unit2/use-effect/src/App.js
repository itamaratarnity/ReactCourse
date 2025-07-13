import React from 'react';
import './App.css';
import UsersList from './components/UsersList';           // עם then
import UsersListAsync from './components/UsersListAsync'; // עם async/await

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🌐 שימוש ב־useEffect לטעינת API</h1>
      <UsersList />
      <hr />
      <UsersListAsync />
    </div>
  );
}

export default App;

