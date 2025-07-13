import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

// This file is part of a React application that provides a login page.
// It uses the UserContext to manage user state and allows users to log in by entering their name.
// The component uses React Router's useNavigate hook to redirect users to the dashboard after successful login.
// The component is styled with padding for better layout.
// It is a functional component that leverages React's context API to manage user state.
// The component is exported as the default export of the module, allowing it to be imported easily in other parts of the application.
// The component is designed to be used in a React application that has user authentication implemented.
// The component includes basic input handling and validation to ensure that the user enters a name before logging
// in, enhancing user experience by preventing empty submissions.
// The component is designed to be simple and user-friendly, focusing on the login functionality without unnecessary complexity.
// The component is intended to be part of a larger application where user authentication is required, providing a seamless login experience.
// The component is structured to be easily maintainable and extendable, allowing for future enhancements such
// as additional authentication methods or user feedback mechanisms.
// The component is written in a way that follows best practices for React development, ensuring readability and maintainability.
// The component is designed to be responsive and work well across different devices, ensuring a consistent user
// experience regardless of the platform.
// The component is part of a user authentication flow, allowing users to securely log in and access


function Login() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      setUser({ name });
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>🔐 התחברות</h2>
      <input
        placeholder="הכנס שם"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>התחבר</button>
    </div>
  );
}

export default Login;
