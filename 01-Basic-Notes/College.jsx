//this will show nothing at start but after button click it'll show the college name

import React, { useState } from 'react'

const College = ({names}) => {
    let [i, setI] = useState(0);

  return (
    <div>
        <h1>Show colleges</h1> 
        <button onClick={()=>{setI(i+1)}}>View</button>
        {i>0 && (
            <p>Collegse No.{i}: {names[i-1]}</p>
        )}
    </div>
  )
}

export default College