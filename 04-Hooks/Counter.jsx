import React, { useState } from 'react'
import HandlePropsSideEffects from './HandlePropsSideEffects';

const Counter = () => {
    const [count,setCount] = useState(0);
    const [data, setData] = useState(10);

  return (
    <div>
        <HandlePropsSideEffects count={count} data={data} /> 
        <button onClick={()=>setCount(count+1)}>Increase Count</button>       
        <button onClick={()=>setData(data-1)}>Decrease data</button>
    </div>
  )
}

export default Counter