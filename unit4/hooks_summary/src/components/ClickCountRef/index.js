import React, { useRef } from 'react';

export default function ClickCountRef() {
  const clicks = useRef(0);
  return (
    <div style={box}>
      <h4>useRef – Background Count</h4>
      <button onClick={() => { clicks.current++; alert('Total clicks: ' + clicks.current); }}>
        Click me
      </button>
    </div>
  );
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };