// this is the code for full page of this program
// in program: we have multiple component like college,class & student
// now inside student we have subject, if subject data needed to be changed from college component then context api is used

//Context API is a suitable way to manage state when a component's data needs to be changed from a non-parent component.
//Without Context, you would have to pass the subject data as a prop from college down to class, and then from class down to student.

import React, { useState } from 'react'
import College from './College'
import { SubjectContext } from './ContextData'

const FullPage = () => {

    const [subject, setSubject] = useState('')
  return (
    <div style={{backgroundColor:'yellow', padding:'10px',color:'black'}}>
        <SubjectContext.Provider value={subject}>
            <select value={subject} onChange={event=> setSubject(event.target.value)}>
                <option value="">Select subject</option>
                <option value="Maths">Maths</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
            <br />
            <button onClick={()=>setSubject('')}>Clear</button>
            <h1>Context API ka example</h1>
            <College />
        </SubjectContext.Provider>
    </div>
  )
}

export default FullPage