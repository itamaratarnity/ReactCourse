import React, { useRef } from 'react';

export default function FocusRef() {
  const inp = useRef();
  return (
    <div style={box}>
      <h4>useRef – Focus</h4>
      <input ref={inp} placeholder="Click button to focus" />
      <button onClick={() => inp.current.focus()} style={{ marginLeft: 6 }}>Focus</button>
    </div>
  );
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };