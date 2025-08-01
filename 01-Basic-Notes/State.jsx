import React, {useState} from 'react'

const State = () => {
    const fruit = ["Apple","Banana","Tomato"];
    const [i, setI] =useState(0);
    function handleFruit(){
        setI(i=>(i+1)%3);
    }
  return (
    <div>
        <h1>{fruit[i]}</h1>
        <button onClick={handleFruit}>Click to change</button>
    </div>
  )
}

export default State