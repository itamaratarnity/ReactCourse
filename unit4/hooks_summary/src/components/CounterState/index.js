import React, { useState } from 'react';

export default function CounterState() {
  const [count, setCount] = useState(0);
  return (
    <div style={box}>
      <h4>useState – Counter</h4>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 6 }}>Reset</button>
    </div>
  );
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };