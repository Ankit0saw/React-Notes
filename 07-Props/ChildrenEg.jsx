// In your component's JSX, whatever you place between the <Component> and </Component> tags becomes the value of the children prop.

//You don't have to explicitly declare a prop named children. React automatically makes it available to every component.

//The children prop in React is a special, built-in prop that allows you to pass components, elements, or plain text directly between the opening and closing tags of another component. Instead of passing content via a named attribute like message="Hello", you pass it as a child.


import React from 'react'
import Wrapper from './Wrapper'

const ChildrenEg = () => {
   return (
    <div>
      {/* Example 1: Wrapping a simple paragraph */}
      <Wrapper>
        <p>This paragraph is wrapped in a blue box!</p>
      </Wrapper>

      {/* Example 2: Wrapping a heading and a button */}
      <Wrapper>
        <h2>Hello World!</h2>
        <button>Click Me</button>
      </Wrapper>
    </div>
   )
}

export default ChildrenEg