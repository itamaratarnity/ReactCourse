import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

// This component allows the user to input their name.
// It uses the UserContext to manage the user's state.
// The name is stored in local state and updated in the context whenever it changes.
// The input field is controlled, meaning its value is derived from the component's state.
// The useEffect hook is used to update the context whenever the localName changes. 
// This ensures that the context always has the latest user name.
// The component is styled with a simple margin for spacing.
// The UserInput component is a simple form that allows users to enter their name.
// It uses the UserContext to manage the user's state and updates the context whenever the input changes

function UserInput() {
  const { user, setUser } = useContext(UserContext);
  const [localName, setLocalName] = useState(user?.name || '');

  useEffect(() => {
    setUser({ name: localName });
  }, [localName]);

  return (
    <div style={{ margin: '20px' }}>
      <h3>הכנס שם משתמש:</h3>
      <input
        type="text"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
    </div>
  );
}

export default UserInput;

