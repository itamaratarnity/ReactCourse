import React, { useState } from 'react';
import { User } from '../../types/user';

const UserCard: React.FC<User> = ({ name, age, email, isAdmin }) => {
  const [currentAge, setCurrentAge] = useState<number>(age);

  return (
    <div style={{
      border: '1px solid gray',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0'
    }}>
      <h3>{isAdmin ? '⭐' : ''} {name}</h3>
      <p>גיל: {currentAge} ({currentAge >= 18 ? "מבוגר" : "קטין"})</p>
      <p>מייל: {email}</p>
      <button onClick={() => setCurrentAge(currentAge + 1)}>הוסף שנה</button>
    </div>
  );
};

export default UserCard;
