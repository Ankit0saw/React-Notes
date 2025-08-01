import React from 'react'

const Wrapper = ({children,rang="blue"}) => { // here blue is the default color applied nothing is passed as props
    // children is used to render the html inside Wrapper
  return (
    <div style={{color:rang}}>
        {children}
    </div>
  )
}

export default Wrapper