// it'll show the clicked skills into the array and display

import React, { useState } from 'react'

const HandleCheckbox = () => {

    const [skills, setSkills] =useState([]);

    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);

        if(event.target.checked){   //add 
            setSkills([...skills,event.target.value]); //spread operators
        }
        else{   //remove
            setSkills([...skills.filter((skill)=> skill !== event.target.value)])
            //filter() creates a new array by keeping only the skills that are not equal to the unchecked value.
        }
    }

  return (
    <div>
        <h2>Select your skills</h2>

        <input onChange={handleSkills} type="checkbox" id='php' value={"PHP"}/>
        <label htmlFor="php">PHP</label>
        <br />
        <input onChange={handleSkills} type="checkbox" id='java' value={"Java"}/>
        <label htmlFor="java">Java</label>
        <br />
        <input onChange={handleSkills} type="checkbox" id='python' value={"Python"}/>
        <label htmlFor="python">Python</label>
        
        <br />
        <br />
        <h4>Your selected skills: {skills.toString()}</h4>
    </div>
  )
}

export default HandleCheckbox