import React,{useReducer} from 'react';
function reducer(state,action){return {...state,[action.name]:action.value};}
export default function FormReducer(){
  const [form,dispatch]=useReducer(reducer,{name:'',email:''});
  return <div style={box}>
    <h4>useReducer – Form</h4>
    <input name="name" placeholder="Name" value={form.name} onChange={e=>dispatch(e.target)}/>
    <input name="email" placeholder="Email" value={form.email} onChange={e=>dispatch(e.target)} style={{marginLeft:6}}/>
    <p>{JSON.stringify(form)}</p>
  </div>;
}
const box={border:'1px solid #ccc',padding:16,borderRadius:8};