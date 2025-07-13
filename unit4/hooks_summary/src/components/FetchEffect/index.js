import React, { useEffect, useState } from 'react';

export default function FetchEffect() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then(r => r.json())
      .then(setUsers)
      .catch(console.error);
  }, []);
  return (
    <div style={box}>
      <h4>useEffect – Fetch</h4>
      {!users ? <p>Loading…</p> :
        <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>}
    </div>
  );
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };