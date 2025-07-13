import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// This component displays the user's profile information and provides a logout button.
// It uses the AuthContext to access the current user and the logout function.      
// The user's name and email are displayed, and clicking the logout button will call the logout function from the context.
// This allows the user to log out and return to the login form.

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h3>שלום, {user.name}</h3>
      <p>האימייל שלך: {user.email}</p>
      <button onClick={logout}>התנתק</button>
    </div>
  );
}

export default Profile;
