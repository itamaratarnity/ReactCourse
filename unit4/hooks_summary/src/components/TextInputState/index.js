import React, { useState } from 'react';

export default function TextInputState() {
  const [text, setText] = useState('');
  return (
    <div style={box}>
      <h4>useState – Text Input</h4>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Type…"/>
      <p style={{ marginTop: 8 }}>You typed: {text || '...'}</p>
    </div>
  );
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };