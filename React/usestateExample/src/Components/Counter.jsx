import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  let increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>count is : {count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>


      <button onClick={() => setCount(count + 1)}>increase 2</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default Counter;
