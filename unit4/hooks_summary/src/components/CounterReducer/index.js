import React, { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type){case 'inc':return {count:state.count+1};
  case 'dec':return {count:state.count-1};
  case 'reset':return {count:0};
  default:return state;}
}
export default function CounterReducer(){
  const [state,dispatch]=useReducer(reducer,{count:0});
  return <div style={box}>
    <h4>useReducer – Counter</h4>
    <p>{state.count}</p>
    <button onClick={()=>dispatch({type:'inc'})}>+</button>
    <button onClick={()=>dispatch({type:'dec'})} style={{marginLeft:6}}>-</button>
    <button onClick={()=>dispatch({type:'reset'})} style={{marginLeft:6}}>Reset</button>
  </div>;
}
const box={border:'1px solid #ccc',padding:16,borderRadius:8};