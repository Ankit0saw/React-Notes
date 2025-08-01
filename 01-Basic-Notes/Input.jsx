// write something in textarea & that'll be instatly displayed on UI using p/h1
// have a clear text and copy to clipboard option

// This is also an example of Controlled Component

import React, { useState } from 'react'

const Input = () => {
    const[text, setText] = useState("");

  return (
    <div>
        <h2>Get input field value live</h2>
        <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
        <br />
        <p>Your text: {text}</p>
        <button onClick={()=>{navigator.clipboard.writeText(text);alert("Message copied")}}>Copy</button> &nbsp;
        <button onClick={()=>setText("")}>Clear</button>
    </div>
  )
}

export default Input;