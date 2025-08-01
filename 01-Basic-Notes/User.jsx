import React from 'react'

const User = ({props}) => {
  return (
    <div>
      <hr />
        <h2>Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
        <h3>Text: {props.text}</h3>
    </div>
  )
}

export default User