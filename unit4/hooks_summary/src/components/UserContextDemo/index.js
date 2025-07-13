import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

export default function UserContextDemo() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <section style={box}>
        <h4>useContext – Auth</h4>
        {user ? (
          <>
            <p>Hello, {user}</p>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <button onClick={() => setUser('Alice')}>Login</button>
        )}
        <UserChild />
      </section>
    </UserContext.Provider>
  );
}

function UserChild() {
  const user = useContext(UserContext);
  return <p>Child says: {user ? 'Logged in' : 'Guest'}</p>;
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };