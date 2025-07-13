import React from 'react';

export default function BuggyComponent({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error("הרכיב קרס בכוונה 😱");
  }

  return (
    <div style={style}>
      <h3>🚀 רכיב תקין</h3>
      <p>הכול עובד כרגיל.</p>
    </div>
  );
}

const style = {
  border: '1px solid #ccc',
  padding: 16,
  margin: 10,
  borderRadius: 8,
  backgroundColor: '#f9f9f9',
};
