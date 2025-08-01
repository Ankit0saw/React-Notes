import React from 'react'

const King = () => {

    function check(){
        alert('<p>just checking the button</p>');
    }

  return (
    <div>
        <h1>King steve</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTl30668THgaKaIB1w80oNnxFKUUBZMPiGVXbzcvaUP2i9mJkWXituulY7MaPf4OJwCM&usqp=CAU" alt="image of steve" />
        <ul> Character
            <li>big house, no parents</li>
            <li>always the goddamn babysitter</li>
            <li>even won a fight</li>
        </ul>
        <button onClick={check}>Clickable</button>
    </div>
  )
}

export default King