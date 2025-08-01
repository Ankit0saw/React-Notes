import React, { useState } from 'react'
import King from './king';

const Toggle = () => {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}
            style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '50%' }}>
                Toggle here
        </button>
        {display ? <King/> : null}
    </div>
  )
}

export default Toggle