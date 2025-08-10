import React, { useEffect } from 'react'

const HandlePropsSideEffects = ({count, data}) => {

    const handleCounter=()=>{
        console.log("handle-counter called")
    }
    useEffect(()=>{
        handleCounter();
    },[count]) // after count value change only, the fn will render
    // we can also have another useEffect for handleData also so that dataCounter fn will render on data change
  return (
    <div>
        <h1>Handling Props</h1>
        <h2>Counter value: {count}</h2>
        <h2>Data value: {data}</h2>
    </div> 
  )
}

export default HandlePropsSideEffects