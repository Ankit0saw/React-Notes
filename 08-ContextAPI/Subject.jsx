import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {
    const subject = useContext(SubjectContext)
  return (
    <div style={{backgroundColor:'pink', padding:'10px'}}>
        <h2>Subject component</h2>
        <p>Subject is: {subject}</p>
    </div>
  )
}

export default Subject