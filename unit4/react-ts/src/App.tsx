import React from 'react';
import Counter from './components/Counter/Counter';
import UserCard from './components/UserCard/UserCard';

// App.tsx

/*
function App(): JSX.Element {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>React עם TypeScript</h1>
      <Counter title="מונה ראשי" />
      <hr />
      <UserCard name="רותם" age={20} email="rotem@example.com" isAdmin />
    </div>  );
}

export default App;
*/


function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>React עם TypeScript</h1>
      <Counter title="מונה ראשי" />
      <hr />
      <UserCard name="רותם" age={20} email="rotem@example.com" isAdmin />
    </div>
  );
}

export default App;
