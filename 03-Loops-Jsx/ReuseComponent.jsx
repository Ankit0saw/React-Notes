import React from 'react'

const ReuseComponent = ({ name }) => {
  return (
    <div style={{color:"green", border:"1px solid red", margin:"10px"}}>
        <h3>Reuse component in loop</h3>
        <p>{name}</p>
    </div>
  )
}

export default ReuseComponent