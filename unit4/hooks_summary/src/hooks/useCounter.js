import {useState} from 'react';
export function useCounter(init=0){
  const [count,set]=useState(init);
  const inc=()=>set(c=>c+1);
  const dec=()=>set(c=>c-1);
  const reset=()=>set(init);
  return {count,inc,dec,reset};
}