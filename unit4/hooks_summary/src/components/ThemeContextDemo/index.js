import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeContextDemo() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <section style={box}>
        <h4>useContext – Theme ({theme})</h4>
        <button onClick={() => setTheme(t => t==='light'?'dark':'light')}>Toggle</button>
        <ThemeChild />
      </section>
    </ThemeContext.Provider>
  );
}

function ThemeChild() {
  const theme = useContext(ThemeContext);
  return <p>Child sees theme: {theme}</p>;
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };