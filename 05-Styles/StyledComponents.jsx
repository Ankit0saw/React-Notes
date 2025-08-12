// Styled Components is a library for styling React components with CSS inside JavaScript.

// you create a new React component that already has its styles built-in. For example, you can create a Button component that has all the CSS for a button, and then just use that Button component wherever you need it.

// This Button is now a fully functional React component with its own, isolated styles. This prevents styles from accidentally affecting other parts of your app.

import styled from "styled-components"

const StyledComponents = () => {

    const Button = styled.button`
        color: red;
        padding: 10px;
        margin: 5px;
        background-color: white;
        height: 50px;
        width: 150px;
    `

    const Heading = styled.h1`
        color: red;
        border: 1px solid blue;
    `

  return (
    <div>
        <Heading>Styled Component</Heading>
        <Button>Click Me</Button>
    </div>
  )
}

export default StyledComponents