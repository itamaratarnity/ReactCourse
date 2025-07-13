import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export default function CustomCounterHook(){
  const {count,inc,dec,reset}=useCounter(5);
  return <div style={box}>
    <h4>Custom Hook – useCounter</h4>
    <p>{count}</p>
    <button onClick={inc}>+</button>
    <button onClick={dec} style={{marginLeft:6}}>-</button>
    <button onClick={reset} style={{marginLeft:6}}>Reset</button>
  </div>;
}
const box={border:'1px solid #ccc',padding:16,borderRadius:8};