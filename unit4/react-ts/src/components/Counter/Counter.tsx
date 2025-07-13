import React, { useState } from 'react';

type CounterProps = {
  title: string;
};

const Counter: React.FC<CounterProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>{title}</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>הוסף</button>
    </div>
  );
};

export default Counter;
