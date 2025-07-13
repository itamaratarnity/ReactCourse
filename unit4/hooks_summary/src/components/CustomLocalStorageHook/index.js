import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function CustomLocalStorageHook(){
  const [theme,setTheme]=useLocalStorage('theme','light');
  return <div style={box}>
    <h4>Custom Hook – useLocalStorage</h4>
    <p>Theme: {theme}</p>
    <button onClick={()=>setTheme(t=>t==='light'?'dark':'light')}>Toggle theme</button>
  </div>;
}
const box={border:'1px solid #ccc',padding:16,borderRadius:8};