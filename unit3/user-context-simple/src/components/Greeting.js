import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

// This component displays a greeting message to the user.
// It uses the UserContext to access the user's name.
// The greeting is updated whenever the user's name changes.
// The component is styled with a simple margin for spacing.
// The Greeting component is a simple way to greet the user by their name.
// It uses the UserContext to access the user's name and displays a greeting message.
// The useEffect hook is used to update the greeting whenever the user's name changes.
// If the user is not logged in or has no name, it defaults to "אור

function Greeting() {
  const { user } = useContext(UserContext);
  const [greetingName, setGreetingName] = useState(user?.name || '');

  useEffect(() => {
    if (user?.name) {
      setGreetingName(user.name);
    }
  }, [user]);

  return (
    <div style={{ margin: '20px' }}>
      <h3>👋 שלום, {greetingName || 'אורח'}!</h3>
    </div>
  );
}

export default Greeting;
