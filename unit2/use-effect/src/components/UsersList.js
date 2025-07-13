import React, { useState, useEffect } from 'react';

// This code defines a React component that fetches a list of users from an API using promises.
// It uses the useState and useEffect hooks to manage state and side effects.

// The component displays a loading message while the data is being fetched, and once the data is available,
// it renders a list of users with their names and emails. If an error occurs during the
// fetch operation, it logs the error to the console and stops the loading state.
// The component is exported for use in other parts of the application.
// This approach is straightforward and works well for simple data fetching scenarios.
// The component can be further enhanced by adding features like error messages in the UI, loading spinners, or retry mechanisms.
// The component is designed to be reusable and can be integrated into a larger application where user data
// needs to be displayed. It follows best practices for error handling and state management in React.
// The component can be further enhanced by adding features like error messages in the UI, loading spinners, or retry mechanisms.
// The component is designed to be reusable and can be integrated into a larger application where user data
// needs to be displayed. It follows best practices for error handling and state management in React.

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('שגיאה:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>משתמשים</h2>
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

export default UsersList;
