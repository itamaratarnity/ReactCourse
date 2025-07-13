import React, { useState, useRef } from 'react';

function DynamicForm() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  // הוספת פריט מהרשימה
  const addItem = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      setItems(prev => [...prev, value]);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>טופס דינמי – הוספת פריטים</h2>

      <input
        type="text"
        placeholder="הזן פריט חדש"
        ref={inputRef}
        style={{ width: '70%', padding: 8 }}
      />
      <button onClick={addItem} style={{ padding: 8, marginLeft: 8 }}>
        הוסף
      </button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>📌 {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicForm;
