import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h3>Counter: {count}</h3>
      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)}>➕ Add</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default Counter;
