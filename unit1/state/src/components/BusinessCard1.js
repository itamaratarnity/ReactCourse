import React, { useState } from 'react';

// קומפוננטת כרטיס ביקור עם מונה פנימי
// משתמשת ב-Hooks כדי לעקוב אחרי מספר הלייקים     
function BusinessCard1({ name, age, job, email }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ border: '1px solid gray', padding: 10, width: 300, margin: 10 }}>
      <h2>{name}</h2>
      <p>גיל: {age}</p>
      <p>מקצוע: {job}</p>
      <p>מייל: {email}</p>

      <p>❤️ מספר לייקים: {likes}</p>
      <button onClick={handleLike}>הוסף לייק</button>
    </div>
  );
}

export default BusinessCard1;
