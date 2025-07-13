import React, { useEffect, useState } from 'react';

export default function TimerEffect() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSec(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  return <div style={box}><h4>useEffect – Timer</h4><p>{sec}s elapsed</p></div>;
}
const box = { border: '1px solid #ccc', padding: 16, borderRadius: 8 };