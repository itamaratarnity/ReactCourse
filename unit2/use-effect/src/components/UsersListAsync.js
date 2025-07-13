import React, { useState, useEffect } from 'react';

// This code defines a React component that fetches a list of users from an API using async/await syntax.
// It uses the useState and useEffect hooks to manage state and side effects.
// The component displays a loading message while the data is being fetched, and once the data is available,
// it renders a list of users with their names and emails. If an error occurs during the fetch operation,
// it logs the error to the console. The component is exported for use in other parts of the application.   
// This approach is more modern and cleaner compared to the previous version that used promises directly.
// The use of async/await makes the code easier to read and understand, especially when dealing with asynchronous operations.
// The component is designed to be reusable and can be integrated into a larger application where user data
// needs to be displayed. It follows best practices for error handling and state management in React.
// The component can be further enhanced by adding features like error messages in the UI, loading sp

function UsersListAsync() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('שגיאה:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>משתמשים (async/await)</h2>
      {loading ? <p>טוען...</p> : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name} - {u.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersListAsync;
