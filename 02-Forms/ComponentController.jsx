//A controlled component works by storing the input value in React state using useState, updating that state whenever the user types, and then re-rendering the component with the new value to keep the UI in sync with the internal state.

// User types → onChange → setState → Component re-renders → Updated value shown

import React, { useState } from 'react'

const ComponentController = () => {

    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value); // updates state automatically
    };

  return (
    <div>
        <input type="text" value={text} onChange={handleChange} 
            placeholder='Type here'/>
        <p>You typed: {text}</p>
    </div>
  )
}

export default ComponentController