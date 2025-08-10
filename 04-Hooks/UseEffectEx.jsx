// The useEffect Hook accepts two arguments: a function (the "effect") and an optional dependency array.

// The dependency array is the most important part of useEffect. It tells React when to re-run your effect function.

// 1. [prop, state]: If you provide variables in the array, the effect will run once after the initial render and then only if any of those variables have changed since the last render. This is the most common use case.

// 2. []: An empty array tells React to run the effect only once, right after the component first mounts. This is perfect for initial data fetching.

// 3. No array: If you omit the dependency array entirely, the effect will run after every single render. This can be inefficient and often leads to bugs, so it's rarely used.

import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState("initial data");

  useEffect(() => {
    console.log( `Data changed: ${data}`);
  }, [data]); // after data change, it'll render by itselt

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increase count</button>
      <p>data: {data}</p>
      <button onClick={()=>setData(data === "new data" ? "initial data" : "new data")}>Change data</button>
    </div>
  )
}

export default UseEffectEx