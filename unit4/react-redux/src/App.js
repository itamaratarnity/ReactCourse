import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';
import './Counter.css';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // ➊ נשתמש ב‑state קטן כדי להדליק אנימציה בכל שינוי
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 300); // משך האנימציה
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="counter-wrapper">
      <h1 className="title">Redux Toolkit Counter</h1>

      {/* ➋ נצרף class shake כשה‑state true */}
      <div className={`counter-display ${animate ? 'shake' : ''}`}>
        {count}
      </div>

      <div className="btn-group">
        <button className="btn plus" onClick={() => dispatch(increment())}>+</button>
        <button className="btn minus" onClick={() => dispatch(decrement())}>–</button>
      </div>
    </div>
  );
}
export default App;
