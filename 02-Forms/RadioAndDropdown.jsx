import React, { useState } from 'react'

const RadioAndDropdown = () => {
    const [gender, setGender] = useState("Female");
    const [age, setAge] = useState(25);

    const handleGender=(event)=>{
        setGender(event.target.value)
    }

    const handleAge=(event)=>{
        setAge(event.target.value)
    }

  return (
    <div>
        <h2>Handle Radio and Dropdown</h2>

        <h4>Your Gender: {gender}</h4>
        <input onChange={handleGender} type="radio" id='ml' value={"Male"} name="gender"/>
        <label htmlFor="ml">Male</label>
        <input onChange={handleGender} type="radio" id='fml' value={"Female"} name="gender" defaultChecked/>
        <label htmlFor="fml">Female</label>

        <h4>Your Age: {age}</h4>
        <select defaultValue="25" onChange={handleAge}>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            
      </select>
    </div>
  )
}

export default RadioAndDropdown