import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

// This component displays a welcome message if the user is logged in, or an error message if not.
// It uses the UserContext to access the current user information.  
// The component is styled with padding for better layout.
// It is a simple functional component that leverages React's context API to manage user state.
// The component is exported as the default export of the module, allowing it to be imported easily in other parts of the application.
// The component is designed to be used in a React application that has user authentication implemented.


function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: '30px' }}>
      {user ? (
        <h2>👋 שלום, {user.name} – ברוך הבא ללוח הבקרה</h2>
      ) : (
        <h2>🚫 אינך מחובר</h2>
      )}
    </div>
  );
}

export default Dashboard;
