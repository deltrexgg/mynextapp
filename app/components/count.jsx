'use client'

import React, { useState, useEffect } from 'react';

const count = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('UseEffect is executed'+ count)
  },[count])


  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default count;
